export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
}

export const databaseConfig: DatabaseConfig = {
  "username": null,
  "password": null,
  "database": "passport",
  "host": "127.0.0.1",
  "port": 5432,
  "dialect": "postgres"
};