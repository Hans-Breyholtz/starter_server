import express from "express";

//Controllers
import userController from "../controllers/userController";

//Middleware

const router = express.Router();

//In use
router.post("/api/login", userController.login);

router.post("/api/register", userController.register);

router.post("/api/refresh-token", userController.refreshToken);

router.post("/api/verifyEmail", userController.verifyEmail);

router.post("/api/forgotpassword", userController.forgotPassword);

router.post("/api/resetpassword/:token", userController.resetPassword);

router.post(
  "/api/resend-verification-email",
  userController.resendVerificationEmail
);

router.get("/api/notifications/:userId", userController.getNotifications);

//Vipps
router.get("/api/vipps/login", userController.vippsLogin);

router.get("/api/vipps/callback", userController.vippsCallback);

router.get("/api/vipps/userinfo", userController.vippsUserInfo);

export default router;
