import axios from "axios";

// ✅ Use CRA-style environment variable
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";

// Named exports for all API calls
export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const forgotPassword = (data) => axios.post(`${API_URL}/forgot-password`, data);
export const resetPassword = (token, data) => axios.post(`${API_URL}/reset-password/${token}`, data);
