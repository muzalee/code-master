import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
 const session = request.cookies.has('user')
 const pathname = request.nextUrl.pathname

 if (session && ['/', '/login', '/register'].includes(pathname)) {
   const url = request.nextUrl.clone()
   url.pathname = '/user'
   return NextResponse.redirect(url)
 } else if (!session && pathname === '/user') {
   const url = request.nextUrl.clone()
   url.pathname = '/'
   return NextResponse.redirect(url)
 }

 return NextResponse.next()
}
