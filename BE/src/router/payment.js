import express from "express";

import {
  vnPayPayment,
  vnPayPaymentReturn,
  createOrderZaloPay,
  checkStatusZaloPay,
  getAll,
} from "../controller/payment";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.get('/', isAdminMiddleware, getAll)
router.post("/vnPay", vnPayPayment);
router.get("/vnPay-return", vnPayPaymentReturn);
router.post("/create-order-zaloPay", createOrderZaloPay);
router.post("/check-status-zaloPay/:code", checkStatusZaloPay);

export default router;
