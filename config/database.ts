import { Database } from "../shared/interfaces/-index";

const db = require("./config").development;


/**
 * @description Database Crendentials
 * @type {{username: null; password: null; database: string; host: string; port: number; dialect: string}}
 */
export const databaseCrendentials: Database = {
  "username": db.username,
  "password": db.password,
  "database": db.database,
  "host": db.host,
  "port": db.port,
  "dialect": db.dialect
};