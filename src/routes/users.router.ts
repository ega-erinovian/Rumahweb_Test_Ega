import { Router } from "express";
import {
  getUserController,
  getUsersController,
} from "../controllers/users.controller";
import { verifyToken } from "../lib/jwt";

const router = Router();

router.get("/", verifyToken, getUsersController);
router.get("/:uuid", verifyToken, getUserController);

export default router;
