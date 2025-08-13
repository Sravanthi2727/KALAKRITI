import express from "express";
import userAuth from "../middleware/userAuth.js";
import userController from "../controllers/userController.js";

const userRouter = (User) => {
  const { getUserData, setCart, setWishlist, registerForEvent, placeOrder } = userController(User);

  const router = express.Router();
  router.get("/data", userAuth, getUserData);
  router.post("/cart", userAuth, setCart);
  router.post("/wishlist", userAuth, setWishlist);
  router.post("/register-event", userAuth, registerForEvent);
  router.post("/order", userAuth, placeOrder);

  return router;
};

export default userRouter;