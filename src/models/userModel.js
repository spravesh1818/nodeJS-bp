import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const User = sequelize.define("user", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default User;
