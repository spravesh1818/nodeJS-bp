import { Sequelize } from "sequelize";

const sequelize = new Sequelize("studentdb", "root", "your_root_password", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  logging: console.log,
});

export default sequelize;