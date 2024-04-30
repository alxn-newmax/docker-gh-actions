import Router from "express";
import Controller from "../controllers/todos.controller.js";

const router = Router();

router.post("/", Controller.addTask);
router.put("/", Controller.updateTask);
router.delete("/", Controller.deleteTask);
router.get("/", Controller.findTask);

export default router;
