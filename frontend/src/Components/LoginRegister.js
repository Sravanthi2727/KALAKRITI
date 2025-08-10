import React, { useContext, useState, useRef } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const [state, setState] = useState("login"); // login | signup | reset-email | reset-otp | reset-new
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const inputRefs = useRef([]);

  axios.defaults.withCredentials = true;

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const endpoint = state === "signup" ? "/api/auth/register" : "/api/auth/login";
    const payload = state === "signup" ? { name, email, password } : { email, password };

    try {
      const { data } = await axios.post(backendUrl + endpoint, payload);
      if (data.success) {
        setIsLoggedin(true);
        getUserData();
        toast.success(data.message);
        toast.success("Registered successfully!")
        onClose();
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handleSendResetOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendUrl + "/api/auth/send-reset-otp", { email });
      if (data.success) {
        toast.success(data.message);
        setState("reset-otp");
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const fullOtp = inputRefs.current.map((el) => el.value).join("");
    setOtp(fullOtp);
    setState("reset-new");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendUrl + "/api/auth/reset-password", {
        email,
        otp,
        newPassword,
      });
      if (data.success) {
        toast.success(data.message);
        setState("login");
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Shared form heading
  const renderHeader = (title, subtitle) => (
    <>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </>
  );

  return (
    <div className="modal-overlay">
      <div className="wrapper">
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src="/img/white-kalalkriti.png" alt="logo"style={{ width: "150px", height: "auto", cursor: "pointer" }} onClick={() => navigate("/")} />

        {/* LOGIN / SIGNUP */}
        {(state === "login" || state === "signup") && (
          <>
            {renderHeader(
              state === "signup" ? "Create Account" : "Login",
              state === "signup" ? "Create your Account" : "Login to your account"
            )}
            <div className="form-box login">
              <form onSubmit={handleAuthSubmit}>
                {state === "signup" && (
                  <div className="input-box">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      placeholder="Username"
                      required
                    />
                    <FaUser className="icon" />
                  </div>
                )}
                <div className="input-box">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <FaLock className="icon" />
                </div>

                {state === "login" && (
                  <div className="remember-forgot">
                    <span
                      className="forgot-link"
                      onClick={() => setState("reset-email")}
                    >
                      Forgot Password?
                    </span>
                  </div>
                )}

                <button type="submit">{state === "signup" ? "Sign Up" : "Login"}</button>
              </form>

              <div className="register-link">
                {state === "signup" ? (
                  <p>
                    Already have an account?{" "}
                    <span onClick={() => setState("login")}>Login here</span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <span onClick={() => setState("signup")}>Sign Up</span>
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        {/* RESET EMAIL FORM */}
        {state === "reset-email" && (
          <>
            {renderHeader("Reset Password", "Enter your registered email")}
            <form onSubmit={handleSendResetOtp}>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FaEnvelope className="icon" />
              </div>
              <button type="submit">Send OTP</button>
              <div className="register-link">
                <p><span onClick={() => setState("login")}>← Back to Login</span></p>
              </div>
            </form>
          </>
        )}

        {/* RESET OTP FORM */}
        {state === "reset-otp" && (
          <>
            {renderHeader("Enter OTP", "Enter the 6-digit code sent to your email")}
            <form onSubmit={handleVerifyOtp}>
              <div className="otp-inputs">
                {Array(6)
                  .fill(0)
                  .map((_, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[idx] = el)}
                      required
                    />
                  ))}
              </div>
              <button type="submit">Verify OTP</button>
            </form>
          </>
        )}

        {/* NEW PASSWORD FORM */}
        {state === "reset-new" && (
          <>
            {renderHeader("New Password", "Enter your new password")}
            <form onSubmit={handleResetPassword}>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
              </div>
              <button type="submit">Reset Password</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
