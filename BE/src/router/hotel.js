import express from "express";
import expressFormidable from "express-formidable";

import {
  getAll,
  getOne,
  create,
  update,
  getHotelByLocation,
} from "../controller/hotel";
import { isAdminMiddleware } from "../middleware";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/hotel-by-city/:location", getHotelByLocation);
router.post("/", isAdminMiddleware, expressFormidable(), create);
router.patch("/:id", isAdminMiddleware, expressFormidable(), update);

export default router;
