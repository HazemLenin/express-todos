import getTodosModel from "../models/getTodosModel.js";
import TodosRepository from "../repositories/todosRepository.js";

export default function (todo: getTodosModel) {
  return TodosRepository.getTodos();
}
