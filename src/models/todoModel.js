import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Todo = sequelize.define("todo", {
  name: DataTypes.STRING,
  task_status: DataTypes.ENUM("todo", "doing", "done"),
});

export default Todo;