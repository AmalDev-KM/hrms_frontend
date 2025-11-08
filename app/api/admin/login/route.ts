export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { backendPost } from "@/lib/backend";
import { AdminLoginBody, AdminLoginResponse } from "@/types/admin/authTypes";

export async function POST(req: Request) {
  console.log("RUNTIME:", process.release?.name);

  const body = await req.json();
  const result = await backendPost<AdminLoginResponse, AdminLoginBody>(
    "auth/login",
    body
  );

  const response = NextResponse.json(result.data, { status: result.status });

  // ✅ Fix: backend may send multiple cookies → take the first
  if (
    result.setCookie &&
    Array.isArray(result.setCookie) &&
    result.setCookie.length > 0
  ) {
    response.headers.set("set-cookie", result.setCookie[0]);
  }

  return response;
}
