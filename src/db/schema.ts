import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todosTable = sqliteTable("todos_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  completed: int({ mode: "boolean" }).default(false),
});
