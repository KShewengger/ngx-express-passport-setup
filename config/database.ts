module.exports = {
  "development": {
    "username": process.env.DEV_DB_DIALECT  || null,
    "password": process.env.DEV_DB_PASSWORD || null,
    "database": process.env.DEV_DB_NAME     || "passport",
    "host"    : process.env.DEV_DB_HOST     || "127.0.0.1",
    "port"    : process.env.DEV_DB_PORT     || "5432",
    "dialect" : process.env.DEV_DB_DIALECT  || "postgres"
  }
};
