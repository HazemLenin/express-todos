import { Request, Response } from "express";
import { todosTable } from "../db/schema.js";
import createTodo from "../useCases/createTodo.js";
import Todo from "../entities/todo.js";
import createTodoModel from "../models/createTodomodel.js";
import { HttpStatusCodes } from "../utils/statusCodes.js";
import TodosRepository from "../repositories/todosRepository.js";

export async function getTodos(req: Request, res: Response) {
  let todos = await TodosRepository.getTodos();

  res.status(HttpStatusCodes.OK).send(todos);
}

export async function addTodo(req: Request, res: Response) {
  let model: createTodoModel = req.body;
  await createTodo(model);
  res.status(HttpStatusCodes.CREATED).send();
}
