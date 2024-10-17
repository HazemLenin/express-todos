import express, { Application } from "express";
import todosRoutes from "./routes/todosRoutes.js";

const app: Application = express();

app.use(express.json());

app.use("/todos", todosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
