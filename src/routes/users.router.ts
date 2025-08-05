import { Router } from "express";
import { getUserController } from "../controllers/users.controller";
import { loginController } from "../controllers/auth.controller";

const router = Router();

router.get("/:uuid", getUserController);
router.get("/:uuid", loginController);

export default router;
