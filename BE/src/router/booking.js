import express from "express";

import {
  getAll,
  getOne,
  getBookingByUser,
  create,
  update,
  calculateTotalAmountDay,
  calculateTotalAmountMonth,
  getTotalStatus,
  updateInfoBooking,
} from "../controller/booking";
import { loginMiddleware, isAdminMiddleware } from "../middleware";

const router = express.Router();

router.get("/", isAdminMiddleware, getAll);
router.get("/get-one/:id", isAdminMiddleware, getOne);
router.get("/booking-user", loginMiddleware, getBookingByUser);
router.post("/", loginMiddleware, create);
router.get("/getTotalStatus", isAdminMiddleware, getTotalStatus);
router.post(
  "/calculateTotalAmountDay",
  isAdminMiddleware,
  calculateTotalAmountDay
);
router.post(
  "/calculateTotalAmountMonth",
  isAdminMiddleware,
  calculateTotalAmountMonth
);
router.put("/:id", loginMiddleware, updateInfoBooking);
router.patch("/:id", loginMiddleware, update);

export default router;
