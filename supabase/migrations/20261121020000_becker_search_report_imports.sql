create table if not exists public.becker_search_report_imports (
  source text not null check (source in ('backlinks', 'google-ai', 'bing-ai')),
  imported_at timestamptz not null default now(),
  headings jsonb not null,
  rows jsonb not null,
  primary key (source, imported_at)
);

alter table public.becker_search_report_imports enable row level security;
revoke all on public.becker_search_report_imports from anon, authenticated;
grant select, insert on public.becker_search_report_imports to service_role;
