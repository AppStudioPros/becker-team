import { createAdminClient } from '@/lib/supabase'
import { createClient } from '@/lib/supabase/server'

export async function canViewSearchReports() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) return false

  const { data, error: profileError } = await createAdminClient()
    .from('becker_admin_profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  return !profileError && data?.role === 'super_admin'
}
