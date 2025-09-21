import axios from "axios";

// Base URL of your Render backend
const API_URL = "https://password-reset-1-a8ig.onrender.com/api/auth";

export const registerUser   = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser      = (data) => axios.post(`${API_URL}/login`, data);
export const forgotPassword = (data) => axios.post(`${API_URL}/forgot-password`, data);
export const resetPassword  = (token, data) =>
  axios.post(`${API_URL}/reset-password/${token}`, data);
