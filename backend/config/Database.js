import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DB_NAME || "news_toplearn",
  process.env.DB_USER || "news",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    dialect: "mysql",
  }
);

export default db;
