"use strict";

import { Sequelize } from "sequelize-typescript";

import { Account } from "./Account";

import * as config from "../config/config";

const db = config.default.development;

const sequelize = new Sequelize({
  database: db.database,
  dialect: db.dialect,
  username: db.username,
  password: db.password,
  operatorsAliases: false
});

sequelize.addModels([ Account ]);


export { sequelize, Sequelize };
