drop function if exists public.update_quest(uuid, text, text, integer, text, text, integer, date, text[], text, text);

create function public.update_quest(
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
  where id = p_quest_id and issuer_id = v_user and status = 'open'
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

grant execute on function public.update_quest(uuid, text, text, integer, text, text, integer, date, text[], text, text) to authenticated;

notify pgrst, 'reload schema';
