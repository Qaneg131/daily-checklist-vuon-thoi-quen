-- Vườn Thói Quen — Schema đồng bộ đám mây cho Supabase
-- Cách dùng: Supabase Dashboard → SQL Editor → dán toàn bộ file này → Run (chạy 1 lần duy nhất)

create table if not exists public.user_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

-- Mỗi người chỉ đọc / ghi dữ liệu của chính mình
drop policy if exists "own state select" on public.user_state;
create policy "own state select" on public.user_state
  for select using (auth.uid() = user_id);

drop policy if exists "own state insert" on public.user_state;
create policy "own state insert" on public.user_state
  for insert with check (auth.uid() = user_id);

drop policy if exists "own state update" on public.user_state;
create policy "own state update" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
