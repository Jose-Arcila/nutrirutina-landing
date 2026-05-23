-- Migration: init_schema
-- Captures the existing `emails` table that was created outside of migrations.
-- Running this against a fresh DB will recreate the table exactly.
-- Safe to run against the existing DB via: supabase db push (it tracks applied migrations).

create table if not exists public.emails (
  id         bigserial                   not null,
  uuid       uuid                        null default gen_random_uuid(),
  name       text                        not null,
  email      text                        not null,
  company_name text                      null,
  comments   text                        null,
  date_created timestamp with time zone  null default now(),
  phone_number text                      null,
  country_code text                      null,
  interested_in integer                  null,
  wants_call boolean                     null default false,
  constraint emails_pkey primary key (id)
) tablespace pg_default;

create index if not exists emails_email_idx
  on public.emails using btree (email) tablespace pg_default;
