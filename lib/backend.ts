export const runtime = "nodejs";
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export interface BackendResponse<T = unknown> {
  status: number;
  data: T;
  setCookie?: string[] | string | null;
}

export const BACKEND_URL = process.env.EXPRESS_API_URL!;

// General request function for all the requests
async function request<T = unknown>(
  method: string,
  path: string,
  body?: any,
  options: { headers?: Record<string, string> } = {}
): Promise<BackendResponse<T>> {
  const base = BACKEND_URL.endsWith("/") ? BACKEND_URL : BACKEND_URL + "/";
  const cleanedPath = path.replace(/^\//, "");
  const url = base + cleanedPath;

  console.log("created backend URL : => ",url)

  const res = await axios({
    url,
    method,
    data: body,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}), // ✅ new
    },
    validateStatus: () => true,
  });

  return {
    status: res.status,
    data: res.data as T,
    setCookie: res.headers["set-cookie"],
  };
}

// general function for GET, POST, PUT, DELETE
export function backendGet<T = unknown>(
  path: string,
  options?: { headers?: Record<string, string> }
) {
  return request<T>("GET", path, undefined, options);
}

export function backendPost<Response = unknown, Body = unknown>(
  path: string,
  body: Body,
  options?: { headers?: Record<string, string> }
) {
  return request<Response>("POST", path, body, options);
}

export function backendPut<Response = unknown, Body = unknown>(
  path: string,
  body: Body,
  options?: { headers?: Record<string, string> }
) {
  return request<Response>("PUT", path, body, options);
}

export function backendDelete<T = unknown>(
  path: string,
  options?: { headers?: Record<string, string> }
) {
  return request<T>("DELETE", path, undefined, options);
}
