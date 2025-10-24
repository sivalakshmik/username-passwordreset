import { useState } from "react";
import { forgotPassword } from "../api.js";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // Call backend
      await forgotPassword({ email });
      setMessage("✅ Reset link sent to your email!");
      setEmail(""); // clear input after success
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        "⚠️ Something went wrong. Please try again.";
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div
        className="card shadow-sm p-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
      >
        <h2 className="text-center mb-4 text-primary">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <div
            className={`alert mt-4 ${
              message.startsWith("✅")
                ? "alert-success"
                : "alert-danger"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
