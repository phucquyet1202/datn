import express from "express";

import { getAll, getOne, create, remove } from "../controller/review";
import { isAdminMiddleware, loginMiddleware } from "../middleware";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", loginMiddleware, create);
router.delete("/:id", loginMiddleware, remove);

export default router;
