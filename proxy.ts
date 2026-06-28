import { type NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  // 忽略 DevTools 探测请求
  if (request.nextUrl.pathname.includes(".well-known/appspecific")) {
    return NextResponse.next({ status: 200 })
  }

  const { pathname } = request.nextUrl
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico).*)"],
}
