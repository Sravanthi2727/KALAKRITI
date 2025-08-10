import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
  axios.defaults.withCredentials = true;
  const { backendUrl, isLoggedin, userData, getUserData } =
    useContext(AppContent);
  const navigate = useNavigate();
  const inputRefs = React.useRef([]);

  //to move cursor automatically after enetering digits in OTP
//   const handleInput = (e, index) => {
//     if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };
// const handleInputChange = (e, index) => {
//   const value = e.target.value.replace(/\D/g, "");
//   e.target.value = value;
//   if (value && index < inputRefs.current.length - 1) {
//     inputRefs.current[index + 1].focus();
//   }
// };

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

  //for verify button
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join("");
      const { data } = await axios.post(
        backendUrl + "/api/auth/verify-account",
        { otp }
      );
      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
          toast.error(error.response?.data?.message || "Something went wrong");
  console.error("Email verify error:", error);
    }
  };
  useEffect(()=>{
    isLoggedin && userData && userData.isAccountVerified && navigate("/")
  },[isLoggedin,userData])
  return (
    <div>
      Email Verification
      <img
        src="app.jpg"
        alt="add_logo_img_here"
        onClick={() => navigate("/")}
      />
      <form onSubmit={onSubmitHandler}>
        <h1>Email Verify Otp</h1>
        <p>Enter the 6-digit code sent to your Email Id</p>
        <div>
          {/* 6input fields to enter OTP */}
          {/* {Array(6)
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
            ))} */}
            {Array(6)
  .fill(0)
  .map((_, index) => (
    <input
      type="text"
      maxLength="1"
      key={index}
      ref={(el) => (inputRefs.current[index] = el)}
      // onChange={(e) => handleInputChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      onPaste={handlePaste}
      required
    />
))}

        </div>
        <button type="submit">Verify Email</button>
      </form>
    </div>
  );
};

export default EmailVerify;