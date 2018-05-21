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


export { sequelize, Sequelize };
