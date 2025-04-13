import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { ContractController } from "../../controllers/contract/contract.controller";
const router = Router()

router.post('/create-contract', ContractController.createContract)
router.get('/all-contracts', authMiddleware, ContractController.getAllContracts)
router.get('/detail-contract/:id', authMiddleware, ContractController.getDetailContract)
// router.get("/contract-of-employee/:employeeId", authMiddleware, ContractController.getContractsByEmployee);
router.put("/update-contract/:id", authMiddleware, ContractController.updateContractInfo);
router.delete("/delete-contract/:id", authMiddleware, ContractController.deleteContractInfo);
router.put("/update-contract-status/:id", authMiddleware, ContractController.updateContractStatusInfo);
export default router