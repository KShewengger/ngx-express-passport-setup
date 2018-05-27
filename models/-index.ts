"use strict";

import { Sequelize } from "sequelize-typescript";

import { Account } from "./Account";
import { Provider } from "./Provider";

import { Database } from "../config/-index";

const env = process.env.NODE_ENV || "development";
const db  = Database[env];

const sequelize = new Sequelize({
  host      : db.host,
  database  : db.database,
  dialect   : db.dialect,
  username  : db.username,
  password  : db.password,
  operatorsAliases: false
});


sequelize.addModels([ Account, Provider ]);

export { sequelize, Sequelize };
