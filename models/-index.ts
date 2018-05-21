"use strict";

import { Sequelize } from "sequelize-typescript";

import { Account } from "./Account";
import { Provider } from "./Provider";

import { config } from "../config/-index";

const db = config.getDbConfig();

const sequelize = new Sequelize({
  host: db.host,
  database: db.database,
  dialect: db.dialect,
  username: db.username,
  password: db.password,
  operatorsAliases: false
});

sequelize.addModels([ Account, Provider ]);

Account.create({
  id: "0c5569d3-3d3a-4d96-8e8a-6453da647b3d",
  provider_id: "23b5cb15-ef0d-4178-a8c3-3480f2f46555",
  first_name: "Kristy",
  last_name: "Almuete",
  email: "kristyalmuete@gmail.com",
  gender: "f",
})
.then(user => console.log("Successfully created user"))
.catch(err => console.error(err))
.finally(process.exit);

export { sequelize, Sequelize };
