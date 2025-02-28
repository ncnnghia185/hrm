import { Router } from "express";
import { permissionController } from "../../controllers/permission/permission.controller";
const router = Router()

router.post('/create-permission', permissionController.createNewParentPermission)
router.post('/create-child-permission', permissionController.createNewChildPermission)
router.post('/search-permission', permissionController.searchPermission)
router.get("/all-permissions", permissionController.getAllPermissions)
router.get("/permission/:id", permissionController.getPermissionById)
router.get("/permission-tree", permissionController.getPermissionTree)
router.get("/child-permission/:parent_id", permissionController.getChildPermission)
router.put("/update-permission/:id", permissionController.updatePermission)
router.delete("/delete-permission/:id", permissionController.deletePermission)

export default router