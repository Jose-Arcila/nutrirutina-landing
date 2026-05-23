-- Migration: adjust_referrals
-- Drops the old referrals table and creates a clean one matching the exact requirements:
-- Store: name, code (7-digit unique string), and number (for later use).

drop table if exists public.referrals;

create table public.referrals (
  id          bigserial                not null,
  uuid        uuid                     null default gen_random_uuid(),
  name        text                     not null,
  code        text                     not null unique,
  number      bigint                   null default 0,
  created_at  timestamp with time zone null default now(),
  constraint referrals_pkey primary key (id)
) tablespace pg_default;

-- Create search index for fast code lookups
create index if not exists referrals_code_idx
  on public.referrals using btree (code) tablespace pg_default;
