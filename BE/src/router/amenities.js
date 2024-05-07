import express from "express";

import {
  getAll,
  getOne,
  create,
  update,
  // remove,
} from "../controller/amenities";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", isAdminMiddleware, create);
router.patch("/:id", isAdminMiddleware, update);
// router.delete("/:id", isAdminMiddleware, remove);

export default router;
