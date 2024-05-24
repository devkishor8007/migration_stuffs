import { Router } from "express";
import { createUser, getAllUsers, getUser, updateUser } from "../controllers";

const router = Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/users/:id", getUser);
router.patch("/users", updateUser);

export default router;
