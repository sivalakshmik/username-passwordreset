import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { resetPassword } from "../api.js";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, { password });
      setMessage("Password reset successful! You can now login.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Reset Password</button>
      </form>
      {message && (
        <div className="alert alert-info mt-3">
          {message} <Link to="/">Login</Link>
        </div>
      )}
    </div>
  );
}
