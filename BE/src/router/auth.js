import express from "express";

import {
  getAll,
  getInfoUserById,
  register,
  login,
  lockAccount,
  refreshToken,
  getUserByToken,
  googleOauth,
  logout,
  getCode,
  checkCode,
  changePassword,
  getSecurityCode,
  resetPassword,
  updateInfo,
  checkMailRegister,
  changeRoleUser,
} from "../controller/auth";
import { isAdminMiddleware, loginMiddleware } from "../middleware";

const router = express.Router();

router.post("/change-role-user/:id", isAdminMiddleware, changeRoleUser);
router.get("/", isAdminMiddleware, getAll);
router.post("/info-user/:id", isAdminMiddleware, getInfoUserById);
router.post("/register", register);
router.post("/login", login);
router.post("/lock-account/:id", isAdminMiddleware, lockAccount);
router.get("/refresh-token", refreshToken);
router.get("/get-user", loginMiddleware, getUserByToken);
router.get("/google", googleOauth);
router.post("/logout", logout);
router.post("/send-code", loginMiddleware, getCode);
router.post("/check-code", loginMiddleware, checkCode);
router.post("/change-password", loginMiddleware, changePassword);
router.post("/forgot-password", getSecurityCode);
router.post("/reset-password", resetPassword);
router.post("/update-user/:id", loginMiddleware, updateInfo);
router.post("/check-auth", checkMailRegister);

export default router;
