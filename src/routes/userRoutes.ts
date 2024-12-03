import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.post("/users", UserController.createUser);
router.get("/users", UserController.getAllUsers);

export default router;
