import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const schema = "profile";

export const TodosModel = sequelize.define(
  "todos",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: { type: DataTypes.STRING },
    author: { type: DataTypes.STRING },
  },
  {
    schema,
    tableName: "todos",
    createdAt: false,
    updatedAt: false,
  }
);

const ProfileSchema = {
  TodosModel,
};

export default ProfileSchema;
