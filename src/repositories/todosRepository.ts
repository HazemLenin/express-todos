import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { todosTable } from "../db/schema.js";
import Todo from "../entities/todo.js";
import createTodoModel from "../models/createTodomodel.js";

export default class TodosRepository {
  static async create(todo: Todo): Promise<void> {
    await db.insert(todosTable).values({ name: todo.name as string });
  }

  static async getTodos(completed: Boolean | null = null): Promise<Todo[]> {
    let query: Todo[];
    switch (completed) {
      case true:
        query = (await db
          .select()
          .from(todosTable)
          .where(eq(todosTable.completed, true))) as Todo[];
        break;

      case false:
        query = (await db
          .select()
          .from(todosTable)
          .where(eq(todosTable.completed, false))) as Todo[];
        break;

      default:
        query = (await db.select().from(todosTable)) as Todo[];

        break;
    }

    return query;
  }
}
