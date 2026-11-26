create schema if not exists becker_private;

create table becker_private.places_review_usage (
  billing_month date primary key,
  requests integer not null check (requests between 1 and 1000)
);

alter table becker_private.places_review_usage enable row level security;
revoke all on becker_private.places_review_usage from public, anon, authenticated, service_role;

-- The Places quota is shared by every instance and deployment using this database.
create function public.becker_reserve_places_review_request(p_monthly_limit integer)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_monthly_limit is null or p_monthly_limit not between 1 and 1000 then
    return false;
  end if;

  insert into becker_private.places_review_usage as usage (billing_month, requests)
  values (date_trunc('month', statement_timestamp() at time zone 'America/Los_Angeles')::date, 1)
  on conflict (billing_month) do update
    set requests = usage.requests + 1
    where usage.requests < p_monthly_limit;

  return found;
end;
$$;

revoke all on function public.becker_reserve_places_review_request(integer)
  from public, anon, authenticated;
grant execute on function public.becker_reserve_places_review_request(integer) to service_role;
