import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Accept-invite page needs no auth — always allow through
  if (pathname.startsWith('/admin/accept-invite')) {
    return NextResponse.next()
  }

  // Protect all /admin/dashboard routes
  if (pathname.startsWith('/admin/dashboard')) {
    let supabaseResponse = NextResponse.next({ request })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            )
            supabaseResponse = NextResponse.next({ request })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    // Refresh the session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      const loginUrl = new URL('/admin', request.url)
      return NextResponse.redirect(loginUrl)
    }

    return supabaseResponse
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/accept-invite/:path*'],
}
