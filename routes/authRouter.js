import express from "express";
import {
  signupSchema,
  signinSchema,
  verifySchema,
} from "../schemas/usersSchemas.js";
import validateBody from "../decorators/validateBody.js";
import authControllers from "../controllers/authControllers.js";
import authtenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";
import authenticateWithRefresh from "../middlewares/authenticateWithRefresh.js";

const authRouter = express.Router();

const {
  signup,
  signin,
  getCurrent,
  logout,
  getrefreshCurrent,
  updateAvatar,
  verify,
  resendVerifyEmail,
} = authControllers;

authRouter.post("/register", validateBody(signupSchema), signup);
// authRouter.get("/verify/:verificationToken", verify);
// authRouter.post("/verify", validateBody(verifySchema), resendVerifyEmail);
authRouter.post("/login", validateBody(signinSchema), signin);
authRouter.get("/user-info", authtenticate, getCurrent);
authRouter.get("/refreshCurrent", authenticateWithRefresh, getrefreshCurrent);
authRouter.get("/logout", authtenticate, logout);
// authRouter.patch("/", authtenticate, updateSubscription);
authRouter.patch(
  "/avatars",
  authtenticate,
  upload.single("avatarURL"),
  updateAvatar
);

export default authRouter;
