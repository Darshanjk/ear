// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let access = request.cookies.get("access")?.value;
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if (access && request.nextUrl.pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }
  // if (!access && request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: "/dashboard/:path*",
};
