import { Router } from "express";
import { createTodo } from "../controllers";

const router = Router();

router.post("/", createTodo);

export default router;
