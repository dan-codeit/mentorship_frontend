import axios from "axios";
import { getToken } from "../auth/auth";

const baseUrl = import.meta.env.VITE_CLOUD_URL || import.meta.env.VITE_LOCAL_URL

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
