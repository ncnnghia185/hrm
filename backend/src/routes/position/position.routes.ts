import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { PositionController } from "../../controllers/position/position.controller";
const router = Router()

router.post('/create-position', authMiddleware, PositionController.createPosition)
router.get('/all-positions', authMiddleware, PositionController.getAllPositions)
export default router