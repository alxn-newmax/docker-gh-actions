import fs from "fs";
import "dotenv/config";
import { Sequelize } from "sequelize";
import config from "../config/database.config.js";

const db = config[process.env.NODE_ENV];
const sequelizeConfig = {
  ...db,
  dialectOptions: {
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: true,
    //   ca: fs.readFileSync("../../.postgresql/root.crt").toString(),
    // },
  },
  logging: false,
};

const sequelize = new Sequelize(sequelizeConfig);

async function openConnection() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function closeConnection() {
  await sequelize.close();
}

export { sequelize, openConnection, closeConnection };
