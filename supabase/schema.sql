-- Solopreneur Guild production schema for Supabase.
-- Run this in the Supabase SQL editor, then set SUPABASE_URL and SUPABASE_ANON_KEY on Vercel.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  adventurer_name text not null,
  headline text default '',
  summary text default '',
  job text default '',
  skills text[] not null default '{}',
  interests text[] not null default '{}',
  sns_url text default '',
  website_url text default '',
  gold integer not null default 100 check (gold >= 0),
  trust integer not null default 0 check (trust >= 0),
  completed_quests integer not null default 0 check (completed_quests >= 0),
  issued_quests integer not null default 0 check (issued_quests >= 0),
  last_login_bonus_on date,
  login_streak integer not null default 0 check (login_streak >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quests (
  id uuid primary key default gen_random_uuid(),
  issuer_id uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 120),
  description text not null,
  reward integer not null check (reward > 0 and reward <= 300),
  category text not null check (category in ('フィードバックが欲しい', 'ダウンロードして欲しい', 'ユーザー登録して欲しい', 'SNS等で拡散して欲しい', 'インタビューさせて欲しい', '壁打ちさせて欲しい', 'テストをして欲しい', '良いね・レビューを入れて欲しい', 'めっためたに批判が欲しい', 'とにかく褒めちぎって欲しい')),
  quest_type text not null default 'report' check (quest_type in ('report', 'recruiting')),
  capacity integer not null default 1 check (capacity between 1 and 50),
  status text not null default 'open' check (status in ('open', 'closed', 'cancelled')),
  deadline date not null,
  tags text[] not null default '{}',
  reference_url text default '',
  screenshot_url text default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quest_submissions (
  id uuid primary key default gen_random_uuid(),
  quest_id uuid not null references public.quests(id) on delete cascade,
  adventurer_id uuid not null references public.profiles(id) on delete cascade,
  submission_type text not null check (submission_type in ('application', 'report')),
  comment text default '',
  evidence_url text default '',
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (quest_id, adventurer_id, submission_type)
);

create table if not exists public.quest_reviews (
  id uuid primary key default gen_random_uuid(),
  quest_id uuid not null references public.quests(id) on delete cascade,
  submission_id uuid not null unique references public.quest_submissions(id) on delete cascade,
  reviewer_id uuid not null references public.profiles(id) on delete cascade,
  reviewee_id uuid not null references public.profiles(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  trust_bonus integer not null check (trust_bonus in (0, 2, 5, 8, 10)),
  comment text default '',
  created_at timestamptz not null default now(),
  check (reviewer_id <> reviewee_id)
);

create table if not exists public.quest_submission_messages (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.quest_submissions(id) on delete cascade,
  sender_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  body text not null check (char_length(trim(body)) between 1 and 1000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gold_ledger (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  quest_id uuid references public.quests(id) on delete set null,
  amount integer not null,
  reason text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.trust_ledger (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  quest_id uuid references public.quests(id) on delete set null,
  amount integer not null check (amount >= 0),
  reason text not null,
  created_at timestamptz not null default now()
);

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at before update on public.profiles
for each row execute function public.touch_updated_at();

drop trigger if exists quests_touch_updated_at on public.quests;
create trigger quests_touch_updated_at before update on public.quests
for each row execute function public.touch_updated_at();

drop trigger if exists submissions_touch_updated_at on public.quest_submissions;
create trigger submissions_touch_updated_at before update on public.quest_submissions
for each row execute function public.touch_updated_at();

drop trigger if exists submission_messages_touch_updated_at on public.quest_submission_messages;
create trigger submission_messages_touch_updated_at before update on public.quest_submission_messages
for each row execute function public.touch_updated_at();

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
    100,
    0
  )
  on conflict (id) do nothing;

  insert into public.gold_ledger (profile_id, amount, reason)
  values (new.id, 100, 'signup_bonus')
  on conflict do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.create_profile_for_new_user();

create or replace view public.quest_board as
select
  q.id,
  q.title,
  q.description,
  q.reward,
  q.category,
  q.quest_type,
  q.capacity,
  case
    when q.status = 'open' and q.deadline < current_date then 'closed'
    else q.status
  end as status,
  q.deadline,
  q.tags,
  q.reference_url,
  q.screenshot_url,
  q.created_at,
  p.id as issuer_id,
  p.adventurer_name as issuer_name,
  p.headline as issuer_headline,
  p.summary as issuer_summary,
  p.trust as issuer_trust,
  p.completed_quests as issuer_completed,
  p.issued_quests as issuer_issued,
  p.skills as issuer_skills,
  p.interests as issuer_interests,
  count(s.id) filter (where s.status in ('pending', 'approved'))::integer as submission_count,
  count(s.id) filter (where s.status = 'approved')::integer as approved_count
from public.quests q
join public.profiles p on p.id = q.issuer_id
left join public.quest_submissions s on s.quest_id = q.id
group by q.id, p.id;

create or replace function public.issue_quest(
  p_title text,
  p_description text,
  p_reward integer,
  p_category text,
  p_quest_type text,
  p_capacity integer,
  p_deadline date,
  p_tags text[] default '{}',
  p_reference_url text default '',
  p_screenshot_url text default ''
)
returns uuid language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_quest uuid;
begin
  if v_user is null then raise exception 'not_authenticated'; end if;

  update public.profiles
  set gold = gold - (p_reward * p_capacity),
      issued_quests = issued_quests + 1
  where id = v_user and gold >= (p_reward * p_capacity);

  if not found then raise exception 'insufficient_gold'; end if;

  insert into public.quests (issuer_id, title, description, reward, category, quest_type, capacity, deadline, tags, reference_url, screenshot_url)
  values (v_user, p_title, p_description, p_reward, p_category, p_quest_type, p_capacity, p_deadline, coalesce(p_tags, '{}'), coalesce(p_reference_url, ''), coalesce(p_screenshot_url, ''))
  returning id into v_quest;

  insert into public.gold_ledger (profile_id, quest_id, amount, reason)
  values (v_user, v_quest, -(p_reward * p_capacity), 'quest_escrow');

  return v_quest;
end;
$$;

create or replace function public.submit_quest(
  p_quest_id uuid,
  p_submission_type text,
  p_comment text default '',
  p_evidence_url text default ''
)
returns uuid language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_submission uuid;
  v_issuer uuid;
  v_capacity integer;
  v_count integer;
begin
  if v_user is null then raise exception 'not_authenticated'; end if;

  select issuer_id, capacity into v_issuer, v_capacity
  from public.quests
  where id = p_quest_id and status = 'open' and deadline >= current_date;

  if not found then raise exception 'quest_not_available'; end if;
  if v_issuer = v_user then raise exception 'self_submission_denied'; end if;

  select count(*) into v_count
  from public.quest_submissions
  where quest_id = p_quest_id and status in ('pending', 'approved');

  if v_count >= v_capacity then raise exception 'quest_full'; end if;

  insert into public.quest_submissions (quest_id, adventurer_id, submission_type, comment, evidence_url)
  values (p_quest_id, v_user, p_submission_type, coalesce(p_comment, ''), coalesce(p_evidence_url, ''))
  returning id into v_submission;

  return v_submission;
end;
$$;

drop function if exists public.update_quest(uuid, text, text, integer, text, text, integer, date, text[], text, text);

create or replace function public.update_quest(
  p_quest_id uuid,
  p_title text,
  p_description text,
  p_reward integer,
  p_category text,
  p_quest_type text,
  p_capacity integer,
  p_deadline date,
  p_tags text[] default '{}',
  p_reference_url text default '',
  p_screenshot_url text default ''
)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_quest public.quests%rowtype;
  v_approved integer;
  v_active integer;
  v_old_remaining_escrow integer;
  v_new_remaining_escrow integer;
  v_delta integer;
begin
  if v_user is null then raise exception 'not_authenticated'; end if;

  select * into v_quest
  from public.quests
  where id = p_quest_id and issuer_id = v_user and status = 'open' and deadline >= current_date
  for update;

  if not found then raise exception 'quest_not_editable'; end if;

  select count(*) into v_approved
  from public.quest_submissions
  where quest_id = p_quest_id and status = 'approved';

  select count(*) into v_active
  from public.quest_submissions
  where quest_id = p_quest_id and status in ('pending', 'approved');

  if p_capacity < greatest(1, v_active) then raise exception 'capacity_below_submission_count'; end if;

  v_old_remaining_escrow := v_quest.reward * greatest(0, v_quest.capacity - v_approved);
  v_new_remaining_escrow := p_reward * greatest(0, p_capacity - v_approved);
  v_delta := v_new_remaining_escrow - v_old_remaining_escrow;

  if v_delta > 0 then
    update public.profiles
    set gold = gold - v_delta
    where id = v_user and gold >= v_delta;

    if not found then raise exception 'insufficient_gold'; end if;
  elsif v_delta < 0 then
    update public.profiles
    set gold = gold + abs(v_delta)
    where id = v_user;
  end if;

  update public.quests
  set title = p_title,
      description = p_description,
      reward = p_reward,
      category = p_category,
      quest_type = p_quest_type,
      capacity = p_capacity,
      deadline = p_deadline,
      tags = coalesce(p_tags, '{}'),
      reference_url = coalesce(p_reference_url, ''),
      screenshot_url = coalesce(p_screenshot_url, screenshot_url)
  where id = p_quest_id;

  if v_delta <> 0 then
    insert into public.gold_ledger (profile_id, quest_id, amount, reason)
    values (v_user, p_quest_id, -v_delta, 'quest_escrow_adjustment');
  end if;
end;
$$;

create or replace function public.delete_quest(p_quest_id uuid)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_quest public.quests%rowtype;
  v_approved integer;
  v_refund integer;
begin
  if v_user is null then raise exception 'not_authenticated'; end if;

  select * into v_quest
  from public.quests
  where id = p_quest_id and issuer_id = v_user and status = 'open' and deadline >= current_date
  for update;

  if not found then raise exception 'quest_not_deletable'; end if;

  select count(*) into v_approved
  from public.quest_submissions
  where quest_id = p_quest_id and status = 'approved';

  v_refund := v_quest.reward * greatest(0, v_quest.capacity - v_approved);

  if v_approved > 0 then
    update public.quest_submissions
    set status = 'rejected'
    where quest_id = p_quest_id and status = 'pending';

    update public.quests
    set status = 'cancelled'
    where id = p_quest_id;
  else
    delete from public.quests where id = p_quest_id;
  end if;

  update public.profiles
  set gold = gold + v_refund,
      issued_quests = greatest(0, issued_quests - 1)
  where id = v_user;

  if v_refund > 0 then
    insert into public.gold_ledger (profile_id, quest_id, amount, reason)
    values (v_user, case when v_approved > 0 then p_quest_id else null end, v_refund, 'quest_deleted_refund');
  end if;
end;
$$;

create or replace function public.approve_submission(
  p_submission_id uuid,
  p_rating integer,
  p_comment text default ''
)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_quest public.quests%rowtype;
  v_submission public.quest_submissions%rowtype;
  v_bonus integer;
  v_trust integer;
  v_approved integer;
begin
  if v_user is null then raise exception 'not_authenticated'; end if;

  select * into v_submission
  from public.quest_submissions
  where id = p_submission_id and status = 'pending'
  for update;

  if not found then raise exception 'submission_not_available'; end if;

  select * into v_quest
  from public.quests
  where id = v_submission.quest_id and issuer_id = v_user
  for update;

  if not found then raise exception 'not_quest_issuer'; end if;
  if v_submission.adventurer_id = v_user then raise exception 'self_review_denied'; end if;

  v_bonus := case p_rating when 5 then 10 when 4 then 8 when 3 then 5 when 2 then 2 else 0 end;
  v_trust := 5 + v_bonus;

  update public.quest_submissions set status = 'approved' where id = p_submission_id;

  update public.profiles
  set gold = gold + v_quest.reward,
      trust = trust + v_trust,
      completed_quests = completed_quests + 1
  where id = v_submission.adventurer_id;

  insert into public.quest_reviews (quest_id, submission_id, reviewer_id, reviewee_id, rating, trust_bonus, comment)
  values (v_quest.id, v_submission.id, v_user, v_submission.adventurer_id, p_rating, v_bonus, coalesce(p_comment, ''));

  insert into public.gold_ledger (profile_id, quest_id, amount, reason)
  values (v_submission.adventurer_id, v_quest.id, v_quest.reward, 'quest_reward');

  insert into public.trust_ledger (profile_id, quest_id, amount, reason)
  values
    (v_submission.adventurer_id, v_quest.id, 5, 'quest_completed'),
    (v_submission.adventurer_id, v_quest.id, v_bonus, 'review_bonus');

  select count(*) into v_approved
  from public.quest_submissions
  where quest_id = v_quest.id and status = 'approved';

  if v_approved >= v_quest.capacity then
    update public.quests set status = 'closed' where id = v_quest.id;
  end if;
end;
$$;

alter table public.profiles enable row level security;
alter table public.quests enable row level security;
alter table public.quest_submissions enable row level security;
alter table public.quest_reviews enable row level security;
alter table public.quest_submission_messages enable row level security;
alter table public.gold_ledger enable row level security;
alter table public.trust_ledger enable row level security;

drop policy if exists "Profiles are visible" on public.profiles;
create policy "Profiles are visible" on public.profiles for select using (true);
drop policy if exists "Users update own profile" on public.profiles;
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "Quests are visible" on public.quests;
create policy "Quests are visible" on public.quests for select using (true);

drop policy if exists "Submissions visible to owners and issuers" on public.quest_submissions;
create policy "Submissions visible to owners and issuers" on public.quest_submissions
for select using (
  auth.uid() = adventurer_id
  or exists (select 1 from public.quests q where q.id = quest_id and q.issuer_id = auth.uid())
);

drop policy if exists "Reviews are visible" on public.quest_reviews;
create policy "Reviews are visible" on public.quest_reviews for select using (true);

drop policy if exists "Submission messages visible to participants" on public.quest_submission_messages;
create policy "Submission messages visible to participants" on public.quest_submission_messages
for select using (
  exists (
    select 1
    from public.quest_submissions s
    join public.quests q on q.id = s.quest_id
    where s.id = submission_id
      and s.submission_type = 'application'
      and (s.adventurer_id = auth.uid() or q.issuer_id = auth.uid())
  )
);

drop policy if exists "Submission participants create messages" on public.quest_submission_messages;
create policy "Submission participants create messages" on public.quest_submission_messages
for insert with check (
  sender_id = auth.uid()
  and exists (
    select 1
    from public.quest_submissions s
    join public.quests q on q.id = s.quest_id
    where s.id = submission_id
      and s.submission_type = 'application'
      and s.status = 'pending'
      and (s.adventurer_id = auth.uid() or q.issuer_id = auth.uid())
  )
);

drop policy if exists "Gold ledger owner visible" on public.gold_ledger;
create policy "Gold ledger owner visible" on public.gold_ledger for select using (auth.uid() = profile_id);
drop policy if exists "Trust ledger owner visible" on public.trust_ledger;
create policy "Trust ledger owner visible" on public.trust_ledger for select using (auth.uid() = profile_id);

grant usage on schema public to anon, authenticated;
grant select on public.quest_board to anon, authenticated;
grant select on public.profiles, public.quests, public.quest_submissions, public.quest_reviews, public.quest_submission_messages, public.gold_ledger, public.trust_ledger to authenticated;
grant insert on public.quest_submission_messages to authenticated;
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'quest_submission_messages'
  ) then
    alter publication supabase_realtime add table public.quest_submission_messages;
  end if;
end $$;
grant execute on function public.issue_quest(text, text, integer, text, text, integer, date, text[], text, text) to authenticated;
grant execute on function public.submit_quest(uuid, text, text, text) to authenticated;
grant execute on function public.update_quest(uuid, text, text, integer, text, text, integer, date, text[], text, text) to authenticated;
grant execute on function public.delete_quest(uuid) to authenticated;
grant execute on function public.approve_submission(uuid, integer, text) to authenticated;

insert into storage.buckets (id, name, public)
values ('quest-assets', 'quest-assets', true)
on conflict (id) do nothing;

drop policy if exists "Quest assets are publicly readable" on storage.objects;
create policy "Quest assets are publicly readable" on storage.objects
for select using (bucket_id = 'quest-assets');

drop policy if exists "Authenticated users upload quest assets" on storage.objects;
create policy "Authenticated users upload quest assets" on storage.objects
for insert to authenticated
with check (bucket_id = 'quest-assets' and owner = auth.uid());

drop policy if exists "Owners update quest assets" on storage.objects;
create policy "Owners update quest assets" on storage.objects
for update to authenticated
using (bucket_id = 'quest-assets' and owner = auth.uid())
with check (bucket_id = 'quest-assets' and owner = auth.uid());
