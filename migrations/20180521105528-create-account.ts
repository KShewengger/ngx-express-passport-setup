"use strict";

import { QueryInterface, DataTypes } from "sequelize";

const AccountTable = "account";


export async function up(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.createTable(AccountTable, {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    provider_id: {
      type: Sequelize.INTEGER,
      references: { model: "provider", key: "id" }
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.CHAR(76)
    }
  });
}

export async function down(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.dropTable(AccountTable);
}