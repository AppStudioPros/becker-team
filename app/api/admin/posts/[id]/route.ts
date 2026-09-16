import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { createClient } from '@/lib/supabase/server'

async function requireSession() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const session = await requireSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const admin = createAdminClient()
    const { data, error } = await admin
      .from('becker_blog_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json(data)
  } catch (err) {
    console.error('GET /api/admin/posts/[id] error:', err)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const session = await requireSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const admin = createAdminClient()
    const body = await req.json()

    const {
      title,
      slug,
      status,
      feature_image,
      body_top,
      mid_image,
      body_bottom,
      cta_text,
      cta_url,
      meta_description,
    } = body

    const updateData: Record<string, unknown> = {
      title,
      slug,
      status,
      feature_image: feature_image || null,
      body_top: body_top || null,
      mid_image: mid_image || null,
      body_bottom: body_bottom || null,
      cta_text: cta_text || null,
      cta_url: cta_url || null,
      meta_description: meta_description || null,
      updated_at: new Date().toISOString(),
    }

    // If publishing for first time, set published_at
    if (status === 'published') {
      const { data: existing } = await admin
        .from('becker_blog_posts')
        .select('published_at')
        .eq('id', id)
        .single()

      if (!existing?.published_at) {
        updateData.published_at = new Date().toISOString()
      }
    }

    const { data, error } = await admin
      .from('becker_blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    console.error('PUT /api/admin/posts/[id] error:', err)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const session = await requireSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const admin = createAdminClient()
    const { error } = await admin
      .from('becker_blog_posts')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE /api/admin/posts/[id] error:', err)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
