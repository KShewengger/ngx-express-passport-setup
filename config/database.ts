const db = require("./config").development;


export interface DatabaseCredential {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
}


/**
 * @description Database Crendentials
 * @type {{username: null; password: null; database: string; host: string; port: number; dialect: string}}
 */
export const databaseCrendentials: DatabaseCredential = {
  "username": db.username,
  "password": db.password,
  "database": db.database,
  "host": db.host,
  "port": db.port,
  "dialect": db.dialect
};