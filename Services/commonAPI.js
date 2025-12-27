// commonApi.js
import axios from "axios";
import SERVERURL from "./SERVERURL";

const commonAPI = axios.create({
  baseURL: SERVERURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token to every request if available
commonAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default commonAPI;
