export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { backendGet } from "@/lib/backend";
import { Department } from "@/types/admin/departmentTypes";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") ?? "";

  const result = await backendGet<Department[]>("/departments", {
    headers: { cookie: cookieHeader }, // ✅ forward user cookie to backend
  });

  return NextResponse.json(result.data, { status: result.status });
}
