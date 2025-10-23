import axios from "axios";

// Dynamic API base URL (use env variable or fallback to localhost)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";

// Named exports for all API calls
export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const forgotPassword = (data) => axios.post(`${API_URL}/forgot-password`, data);
export const resetPassword = (token, data) => axios.post(`${API_URL}/reset-password/${token}`, data);
