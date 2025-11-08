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
async function request<T = unknown>(method: string, path: string, body?: any): Promise<BackendResponse<T>> {
  const base = BACKEND_URL.endsWith("/") ? BACKEND_URL : BACKEND_URL + "/";
  const cleanedPath = path.replace(/^\//, "");
  const url = base + cleanedPath;

  console.log("constructed url(raw) =>", JSON.stringify(url));

  const res = await axios({
    url,
    method,
    data: body,
    withCredentials: true,
    validateStatus: () => true,
  });

  return {
    status: res.status,
    data: res.data as T,
    setCookie: res.headers["set-cookie"]
  };
}

// general function for GET, POST, PUT, DELETE
export function backendGet<T = unknown>(path: string) {
  return request<T>("GET", path);
}

export function backendPost<Response = unknown, Body = unknown>(
  path: string,
  body: Body
) {
  return request<Response>("POST", path, body);
}

export function backendPut<Response = unknown, Body = unknown>(path: string, body: Body) {
  return request<Response>("PUT", path, body);
}

export function backendDelete<T = unknown>(path: string) {
  return request<T>("DELETE", path);
}
