import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public admin paths — always allow through
  const publicPaths = ['/admin/accept-invite', '/admin/auth/callback']
  if (publicPaths.some(p => pathname.startsWith(p))) {
    return NextResponse.next()
  }
  // Root /admin page is the login page — allow through
  if (pathname === '/admin' || pathname === '/admin/') {
    return NextResponse.next()
  }

  // Protect all /admin/* routes
  if (pathname.startsWith('/admin')) {
    let supabaseResponse = NextResponse.next({ request })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return request.cookies.getAll() },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({ request })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    // Protect users page — admin role only
    if (pathname.startsWith('/admin/users')) {
      const { createClient: createServiceClient } = await import('@supabase/supabase-js')
      const service = createServiceClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { autoRefreshToken: false, persistSession: false } }
      )
      const { data: profile } = await service
        .from('becker_admin_profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()

      if (!profile || profile.role !== 'admin') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))
      }
    }

    return supabaseResponse
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
