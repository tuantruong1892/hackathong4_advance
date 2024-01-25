import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  "advance",
  "root",
  String(process.env.PASSWORD),
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
