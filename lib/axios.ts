import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,          // Next.js internal API
  withCredentials: true,    // <-- Required for cookie authentication
  validateStatus: () => true,
});
