const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(1234),
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING(1234),
      allowNull: false,
    },
  },
  {
    tableName: "projects",
  }
);

module.exports = User;
