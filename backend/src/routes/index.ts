import { Application } from "express";
import roleRoutes from "./role/role.routes";
import permissionRoutes from "./permission/permission.routes";
import accountRoutes from "./account/account.routes";
import departmentRoutes from "./department/department.routes";
const initWebRoutes = (app: Application) => {
    app.use("/api/account", accountRoutes)
    app.use("/api/roles", roleRoutes)
    app.use("/api/permissions", permissionRoutes)
    app.use("/api/departments", departmentRoutes)
}

export default initWebRoutes