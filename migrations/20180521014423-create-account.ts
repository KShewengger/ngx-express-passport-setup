"use strict";

import { QueryInterface, DataTypes } from "sequelize";

const AccountTable = "account";


export async function up(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.createTable(AccountTable, {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    provider_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
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
    }
  });
}

export async function down(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.dropTable(AccountTable);
}