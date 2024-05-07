import express from "express";
import ExpressFormidable from "express-formidable";
import { create, dele, getAll, getOne, update } from "../controller/banner";
import { isAdminMiddleware } from "../middleware";
const router = express.Router();
router.post('/', isAdminMiddleware, ExpressFormidable(), create)
router.patch('/:id', isAdminMiddleware, ExpressFormidable(), update)
router.delete('/:id', isAdminMiddleware, dele)
router.get('/', getAll)
router.get('/:id', getOne)

export default router;