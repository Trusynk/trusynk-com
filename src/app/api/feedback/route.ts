import { type NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()

    // Validate required fields
    if (!body.feedback_type || !body.content_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get IP address from Next.js request
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      'unknown'

    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Create feedback entry
    const feedback = await payload.create({
      collection: 'content-feedback',
      data: {
        feedback_type: body.feedback_type,
        content_type: body.content_type,
        content_id: body.content_id || null,
        message: body.message || null,
        page_url: body.page_url || null,
        metadata: body.metadata || {},
        ip_address: ip,
        user_agent: userAgent,
      },
    })

    return NextResponse.json({ success: true, id: feedback.id })
  } catch (error) {
    console.error('Feedback API error:', error)
    return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 })
  }
}
