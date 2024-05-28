import { Router } from "express";
import user from "./user.router";
import todo from "./todo.router";

const router = Router();

router.use("/todos", todo);
router.use("/users", user);

export default router;
