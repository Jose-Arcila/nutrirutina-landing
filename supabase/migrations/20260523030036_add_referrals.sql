-- Migration: add_referrals
-- Creates the `referrals` table to store referral information.

create table if not exists public.referrals (
  id             bigserial                   not null,
  uuid           uuid                        null default gen_random_uuid(),
  referrer_name  text                        not null,
  referred_name  text                        not null,
  referred_phone text                        null,
  referred_email text                        null,
  notes          text                        null,
  status         text                        not null default 'pending',
  created_at     timestamp with time zone    null default now(),
  constraint referrals_pkey primary key (id)
) tablespace pg_default;

-- Create indexes for performance on lookups
create index if not exists referrals_referrer_name_idx
  on public.referrals using btree (referrer_name) tablespace pg_default;

create index if not exists referrals_referred_name_idx
  on public.referrals using btree (referred_name) tablespace pg_default;

create index if not exists referrals_status_idx
  on public.referrals using btree (status) tablespace pg_default;
