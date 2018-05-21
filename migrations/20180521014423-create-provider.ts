"use strict";

import { QueryInterface, DataTypes } from "sequelize";

const ProviderTable = "provider";

export async function up(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.createTable(ProviderTable, {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  })
  .then(async () => {
    const providers = [
      { id: "23b5cb15-ef0d-4178-a8c3-3480f2f46555", name: "google" },
      { id: "5facd617-9ef0-4aca-a792-a5c71d7254da", name: "facebook" },
      { id: "f4fe6845-28ae-49fa-9ca2-780d565f4420", name: "twitter" }
    ];
    
    return await queryInterface.bulkInsert(ProviderTable, providers);
  });
}

export async function down(queryInterface: QueryInterface, Sequelize: DataTypes) {
  return await queryInterface.dropTable(ProviderTable);
}