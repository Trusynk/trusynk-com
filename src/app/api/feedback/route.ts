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
    const getClientIp = (): string => {
      const forwardedFor = request.headers.get('x-forwarded-for')

      if (forwardedFor) {
        const ips = forwardedFor.split(',').map((ip) => ip.trim())

        return ips[0] || 'unknown'
      }

      const realIp = request.headers.get('x-real-ip')

      if (realIp) return realIp.trim()

      const cfIp = request.headers.get('cf-connecting-ip')

      if (cfIp) return cfIp.trim()

      // Next.js 13+ app router - try to get from request.ip or socket

      const ip = (request as any).ip || (request as any).socket?.remoteAddress

      if (ip) {
        // Normalize IPv6 localhost to IPv4

        if (ip === '::1' || ip === '::ffff:127.0.0.1') return '127.0.0.1'

        return ip
      }

      return 'unknown'
    }

    const ip = getClientIp()

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
