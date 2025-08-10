
import express from "express";
import userAuth from "../middleware/userAuth.js";
import authController from "../controllers/authController.js"; // ✅ Default import

export default function authRouter(User) {
  const router = express.Router();

  const {
    register,
    login,
    logout,
    sendVerifyOtp,
    verifyEmail,
    isAuthenticated,
    sendResetOtp,
    resetPassword,
  } = authController(User); // ✅ Pass User to controller factory

  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);
  router.post("/send-verify-otp", userAuth, sendVerifyOtp);
  router.post("/verify-account", userAuth, verifyEmail);
  router.get("/is-auth", userAuth, isAuthenticated);
  router.post("/send-reset-otp", sendResetOtp);
  router.post("/reset-password", resetPassword);

  return router;
}
