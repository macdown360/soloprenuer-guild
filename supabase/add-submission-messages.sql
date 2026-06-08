create table if not exists public.quest_submission_messages (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.quest_submissions(id) on delete cascade,
  sender_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  body text not null check (char_length(trim(body)) between 1 and 1000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists submission_messages_touch_updated_at on public.quest_submission_messages;
create trigger submission_messages_touch_updated_at before update on public.quest_submission_messages
for each row execute function public.touch_updated_at();

alter table public.quest_submission_messages enable row level security;

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

grant select on public.quest_submission_messages to authenticated;
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
