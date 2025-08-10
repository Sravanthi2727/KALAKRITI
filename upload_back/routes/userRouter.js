

import express from "express";
import userAuth from "../middleware/userAuth.js";
import  userController from "../controllers/userController.js";

// Export a function that takes User model and returns a router
const userRouter = (User) => {
  const { getUserData } = userController(User);

  const router = express.Router();
  router.get("/data", userAuth, getUserData);

  return router;
};

export default userRouter;

