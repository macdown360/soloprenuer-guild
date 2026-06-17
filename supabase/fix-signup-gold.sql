-- Fix signup Gold from 100G to the intended 50G in existing Supabase projects.
-- Run this in the Supabase SQL editor after reviewing the audit queries below.

begin;

-- Audit: profiles that look like they received only an incorrect 100G signup bonus.
select
  p.id,
  p.adventurer_name,
  p.gold,
  coalesce(sum(gl.amount), 0) as ledger_total
from public.profiles p
left join public.gold_ledger gl on gl.profile_id = p.id
group by p.id, p.adventurer_name, p.gold
having p.gold = 100
   and coalesce(sum(gl.amount), 0) in (0, 100)
   and count(*) filter (where gl.reason <> 'signup_bonus') = 0;

-- Ensure new rows and new auth signups receive the intended amount.
alter table public.profiles alter column gold set default 50;

create or replace function public.create_profile_for_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, adventurer_name, headline, job, skills, gold, trust)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'adventurer_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'headline', ''),
    coalesce(new.raw_user_meta_data->>'job', ''),
    case
      when coalesce(new.raw_user_meta_data->>'skills', '') = '' then '{}'
      else string_to_array(new.raw_user_meta_data->>'skills', ',')
    end,
    50,
    0
  )
  on conflict (id) do nothing;

  insert into public.gold_ledger (profile_id, amount, reason)
  values (new.id, 50, 'signup_bonus')
  on conflict do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.create_profile_for_new_user();

-- Correct balances for accounts whose signup bonus ledger was recorded as 100G.
with incorrect_signup as (
  select profile_id
  from public.gold_ledger
  where reason = 'signup_bonus'
    and amount = 100
)
update public.profiles p
set gold = gold - 50
from incorrect_signup i
where p.id = i.profile_id
  and p.gold >= 50;

-- Correct historical signup ledger rows that were recorded as 100G.
update public.gold_ledger gl
set amount = 50
where reason = 'signup_bonus'
  and amount = 100
  and exists (
    select 1
    from public.profiles p
    where p.id = gl.profile_id
  );

-- Correct registered users whose balance still only reflects an incorrect profile default.
update public.profiles p
set gold = 50
where p.gold = 100
  and not exists (
    select 1
    from public.gold_ledger gl
    where gl.profile_id = p.id
      and gl.reason <> 'signup_bonus'
  );

-- Audit: these should return no rows after the fix.
select
  p.id,
  p.adventurer_name,
  p.gold,
  coalesce(sum(gl.amount), 0) as ledger_total
from public.profiles p
left join public.gold_ledger gl on gl.profile_id = p.id
group by p.id, p.adventurer_name, p.gold
having p.gold = 100
   and coalesce(sum(gl.amount), 0) in (0, 100)
   and count(*) filter (where gl.reason <> 'signup_bonus') = 0;

select id, profile_id, amount, reason, created_at
from public.gold_ledger
where reason = 'signup_bonus'
  and amount <> 50;

commit;
