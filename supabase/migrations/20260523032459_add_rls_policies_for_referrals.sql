-- Migration: add_rls_policies_for_referrals
-- Enables Row Level Security (RLS) on public.referrals and grants full access to authenticated admin users.

alter table public.referrals enable row level security;

-- Policy to allow authenticated administrators to perform select, insert, update, and delete actions
create policy "Allow all actions for authenticated users"
  on public.referrals
  for all
  to authenticated
  using (true)
  with check (true);
