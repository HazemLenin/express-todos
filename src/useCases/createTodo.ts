import Todo from "../entities/todo.js";
import createTodoModel from "../models/createTodomodel.js";
import TodosRepository from "../repositories/todosRepository.js";

export default function (todo: createTodoModel) {
  return TodosRepository.create(todo as Todo);
}
