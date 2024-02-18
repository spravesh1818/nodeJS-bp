import { Sequelize, DataTypes } from "sequelize";

// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "your_root_password",
//   database: "studentdb",
//   insecureAuth: true,
//   port: 3306,
// });

const sequelize = new Sequelize("studentdb", "root", "your_root_password", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  logging: console.log,
});

const Todo = sequelize.define("todo", {
  name: DataTypes.STRING,
  task_status: DataTypes.ENUM("todo", "doing", "done"),
});

const grocery = await Todo.create({
  name: "Do laundry",
  task_status: "todo",
});

const todos = await Todo.findAll();

console.log(todos);
