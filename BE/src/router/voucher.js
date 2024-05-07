import express from "express";

import { createVoucher, getVoucherByCode, getAll } from "../controller/voucher";
import { isAdminMiddleware, loginMiddleware } from "../middleware/index";

const router = express.Router();

router.get("/", isAdminMiddleware, getAll);
router.post("/", isAdminMiddleware, createVoucher);
router.post("/get-by-code", loginMiddleware, getVoucherByCode);

export default router;
