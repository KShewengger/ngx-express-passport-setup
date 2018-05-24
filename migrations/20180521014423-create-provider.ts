"use strict";

import { QueryInterface, DataTypes } from "sequelize";

const ProviderTable = "provider";

export async function up(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.createTable(ProviderTable, {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  })
  .then(async () => {
    const providers = [
      { id: 1, name: "google" },
      { id: 2, name: "facebook" },
      { id: 3, name: "twitter" }
    ];
    
    return await queryInterface.bulkInsert(ProviderTable, providers);
  });
}

export async function down(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.dropTable(ProviderTable);
}