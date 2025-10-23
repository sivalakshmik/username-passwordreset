import axios from "axios";

// ✅ CRA environment variable (works both locally & on Netlify)
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";

export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const forgotPassword = (data) => axios.post(`${API_URL}/forgot-password`, data);
export const resetPassword = (token, data) => axios.post(`${API_URL}/reset-password/${token}`, data);
