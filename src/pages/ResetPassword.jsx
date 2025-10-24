import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL =
        process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";

      await axios.post(`${API_URL}/reset-password/${token}`, { password });

      setMessage("✅ Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      const msg = err.response?.data?.message || "❌ Reset failed";
      setMessage(
        msg === "Invalid or expired token"
          ? "⚠️ This reset link has expired. Please request a new one."
          : msg
      );
    }
  };

  return (
    return (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          Reset Password
        </button>
      </form>

      {message && (
        <p
          className={`mt-5 text-center text-sm font-medium ${
            message.startsWith("✅")
              ? "text-green-700 bg-green-50 p-2 rounded"
              : message.startsWith("⚠️")
              ? "text-yellow-700 bg-yellow-50 p-2 rounded"
              : "text-red-700 bg-red-50 p-2 rounded"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  </div>
);

};

export default ResetPassword;


