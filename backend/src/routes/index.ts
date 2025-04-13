import { Application } from "express";
import roleRoutes from "./role/role.routes";
import permissionRoutes from "./permission/permission.routes";
import accountRoutes from "./account/account.routes";
import departmentRoutes from "./department/department.routes";
import positionRoutes from "./position/position.routes";
import contractRoutes from "./contract/contract.routes";
const initWebRoutes = (app: Application) => {
    app.use("/api/account", accountRoutes)
    app.use("/api/roles", roleRoutes)
    app.use("/api/permissions", permissionRoutes)
    app.use("/api/departments", departmentRoutes)
    app.use("/api/positions", positionRoutes)
    app.use("/api/contracts", contractRoutes)
}

export default initWebRoutes