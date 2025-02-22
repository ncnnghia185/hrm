import { Router } from "express";
import { accountController } from "../../controllers/account/account.controller";
const router = Router()
router.post("/create-account", accountController.createNewAccount)
export default router