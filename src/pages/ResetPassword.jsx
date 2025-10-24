import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Reset Password
          </button>
        </form>

        {message && (
          <div
            className={`alert mt-3 text-center ${
              message.startsWith("✅")
                ? "alert-success"
                : message.startsWith("⚠️")
                ? "alert-warning"
                : "alert-danger"
            }`}
          >
            {message}{" "}
            <Link to="/login" className="fw-bold text-decoration-none text-primary">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
