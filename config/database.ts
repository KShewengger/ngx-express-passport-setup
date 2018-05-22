const db = require("./config").development;

export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
}

export const databaseConfig: DatabaseConfig = {
  "username": db.username,
  "password": db.password,
  "database": db.database,
  "host": db.host,
  "port": db.port,
  "dialect": db.dialect
};