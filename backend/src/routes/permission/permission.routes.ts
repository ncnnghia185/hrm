import { Router } from "express";
import { permissionController } from "../../controllers/permission/permission.controller";
const router = Router()

router.post('/create-permission', permissionController.createNewPermission)
router.get("/all-permissions", permissionController.getAllPermissions)
router.get("/permission/:id", permissionController.getPermissionById)
router.put("/update-permission/:id", permissionController.updatePermission)
router.delete("/delete-permission/:id", permissionController.deletePermission)

export default router