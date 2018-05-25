"use strict";

import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";

import { Account } from "./Account";
import { Provider } from "./Provider";

import { config } from "../config/-index";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const db  = config.getDbConfig()[env];

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
