import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { departmentController } from "../../controllers/department/department.controller";
const router = Router()

router.post('/create-department', departmentController.createDepartment)
router.get('/all-departments', authMiddleware, departmentController.getAllDepartments)
export default router