import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const { backendUrl } = useContext(AppContent);
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setisEmailSent] = useState("");
  const [otp, setOtp] = useState(0);
  const [isOtpSubmited, setIsOtpSubmited] = useState(false);

  const inputRefs = React.useRef([]);

  //to move cursor automatically after enetering digits in OTP
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  //to delete digits for backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  //to handle pasting of OTP
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-reset-otp",
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setisEmailSent(true);
    } catch (error) {
    //   toast.error(error.message);
    toast.error(error.response?.data?.message || "Something went wrong");

    }
  };

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmited(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/reset-password",
        { email, otp, newPassword }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && navigate("/login");
    } catch (error) {
      //toast.error(error.message);
      toast.error(error.response?.data?.message || "Something went wrong");

    }
  };
  return (
    <div>
      <img
        src="app.jpg"
        alt="add_logo_img_here"
        onClick={() => navigate("/")}
      />
      {/* email Verification */}

      {!isEmailSent && (
        <form onSubmit={onSubmitEmail}>
          <h1>Reset Password</h1>
          <p>Enter your registered email id</p>
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
          <button type="submit">Verify Email</button>
        </form>
      )}

      {/* otp input form */}
      {!isOtpSubmited && isEmailSent && (
        <form onSubmit={onSubmitOtp}>
          <h1>Reset Password Otp</h1>
          <p>Enter the 6-digit code sent to your Email Id</p>
          <div>
            {/* 6input fields to enter OTP */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  required
                />
              ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {/* new password */}
      {isOtpSubmited && isEmailSent && (
        <form onSubmit={onSubmitNewPassword}>
          <h1>Enter the new password</h1>
          <p>Enter the new password below</p>
          <div className="input-box">
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              type="password"
              placeholder="New Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;