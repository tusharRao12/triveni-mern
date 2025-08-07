import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to every request if needed
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err.response?.data?.error || "API error";
    return Promise.reject(new Error(message));
  }
);

export const api = async (endpoint, method = "GET", body = null) => {
  const config = {
    url: endpoint,
    method,
    data: body,
  };

  const response = await instance(config);
  return response.data;
};
