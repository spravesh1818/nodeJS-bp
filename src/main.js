// app.js
import express from "express";
import Todo from "./models/todoModel.js";
import User from "./models/userModel.js";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

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

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const user = await User.create({ username, password, email });
    if (user) {
      res.json({ msg: "User created successfully" });
    }
  } catch (e) {
    console.log(e);
    res.json({ msg: "Something went wrong.User creation failed" });
  }
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      res.json({ msg: "User does not exist in our system" }).status(404);
    }

    if (user.dataValues.password !== password) {
      res.json({ msg: "Password does not match" }).status(400);
    }

    // Generate json webtoken and send the access token
    const accessToken = jwt.sign({ username: username }, "secretKey", {
      expiresIn: "30d",
    });
    res.json({ access_token: accessToken });
  } catch (e) {
    console.log(e);
    res.json({ msg: "Something went wrong.User creation failed" });
  }
});

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
