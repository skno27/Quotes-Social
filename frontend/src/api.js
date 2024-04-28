import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// defining the axios interceptor!

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // remove authorization header for unauthenticated requests
      delete config.headers.Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
