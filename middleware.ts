import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // ✅ List public routes (no login needed)
  const publicRoutes = ["/signin", "/signup", "/forgot-password"];

  const isPublicRoute = publicRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // ✅ If route is public → allow access
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // ✅ All other routes require login
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|images|api).*)", // protect everything except static files + API routes
  ],
};
