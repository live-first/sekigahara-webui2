import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // アセットや API などはリライト対象外
  const path = request.nextUrl.pathname
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/static') ||
    path === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // サブドメイン取得
  const subdomain = host.split('.')[0]

  if (subdomain === 'yosen2026') {
    return NextResponse.rewrite(new URL('/yosen2026', request.url))
  }

  if (subdomain === 'admin') {
    return NextResponse.rewrite(new URL('/admin', request.url))
  }

  return NextResponse.next()
}
