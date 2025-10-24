import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";
      const res = await axios.post(`${API_URL}/forgot-password`, { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning w-100">Send Reset Link</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
  );
};

export default ForgotPassword;

