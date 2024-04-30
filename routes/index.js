import Router from "express";
import todos from "./todos.route.js";

const router = new Router();

router.use("/todos", todos);

export default router;
