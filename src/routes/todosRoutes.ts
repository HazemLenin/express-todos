import { Router } from "express";
import { addTodo, getTodos } from "../controllers/todosController.js";

const todosRoutes = Router();

todosRoutes.get("", getTodos);
todosRoutes.post("", addTodo);

export default todosRoutes;
