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

export async function GET() {
  try {
    const session = await requireSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const admin = createAdminClient()
    const { data, error } = await admin
      .from('becker_blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    console.error('GET /api/admin/posts error:', err)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await requireSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const admin = createAdminClient()
    const body = await req.json()

    const {
      title,
      slug,
      status = 'draft',
      feature_image,
      body_top,
      mid_image,
      body_bottom,
      cta_text,
      cta_url,
      meta_description,
      category,
      keywords,
    } = body

    if (!title || !slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 })
    }

    const insertData: Record<string, unknown> = {
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
      category: category || null,
      keywords: keywords || null,
      updated_at: new Date().toISOString(),
    }

    if (status === 'published') {
      insertData.published_at = new Date().toISOString()
    }

    const { data, error } = await admin
      .from('becker_blog_posts')
      .insert(insertData)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    console.error('POST /api/admin/posts error:', err)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
