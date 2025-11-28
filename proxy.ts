// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Runs before routes render
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  // 1) Special-case the root ("/")
  if (pathname === "/") {
    return NextResponse.redirect(new URL(token ? "/dashboard" : "/signin", req.url));
  }

  // 2) Public routes (accessible without login)
  const publicRoutes = ["/signin", "/signup", "/forgot-password"];
  const isPublic = publicRoutes.some((r) => pathname.startsWith(r));

  if (isPublic) {
    // If already logged in, keep users out of auth pages
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
    return NextResponse.next();
  }

  // 3) Everything else requires auth
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

// Limit where proxy runs (exclude static files and API)
export const config = {
  matcher: ["/((?!_next|static|favicon.ico|images|api).*)"],
};
