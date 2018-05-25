export interface Database {
  development?: DatabaseCredential;
  test?: DatabaseCredential;
}

export interface DatabaseCredential {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
}