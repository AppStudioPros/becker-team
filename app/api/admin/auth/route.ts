import { NextResponse } from 'next/server'

// Legacy auth endpoint removed — authentication is now handled via Supabase Auth.
// This route is kept as a no-op to avoid 404s from any cached requests.
export async function POST() {
  return NextResponse.json(
    { error: 'This endpoint is no longer active. Use Supabase Auth.' },
    { status: 410 }
  )
}
