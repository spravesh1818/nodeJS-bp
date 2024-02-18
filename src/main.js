// app.js
import express from "express";
import Todo from "./models/todoModel.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/todo", async (req, res) => {
  try {
    const name = req.body.name;
    const status = req.body.status;

    const todo = await Todo.create({
      name: name,
      task_status: status,
    });

    return res.json(todo);
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

app.get("/todo/:id", async (req, res) => {
  const id = req.params.id;

  const todo = await Todo.findOne({
    where: {
      id: id,
    },
  });

  res.json(todo);
});

app.put("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const status = req.body.status;

  const todo = await Todo.update(
    {
      name: name,
      task_status: status,
    },
    {
      where: { id: id },
    }
  );
  res.json(todo);
});

app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.destroy({
    where: {
      id: id,
    },
  });
  res.json(todo);
});

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
