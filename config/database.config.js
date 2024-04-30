import "dotenv/config";

const development = {
  username: process.env.DEV_USER,
  password: process.env.DEV_PASSWORD,
  database: process.env.DEV_DATABASE,
  host: process.env.DEV_HOST,
  port: process.env.DEV_PORT,
  dialect: "postgres",
};

const test = {
  username: process.env.CI_DB_USERNAME,
  password: process.env.CI_DB_PASSWORD,
  database: process.env.CI_DB_NAME,
  host: "127.0.0.1",
  port: "5432",
  dialect: "postgres",
};

const production = {
  username: process.env.PROD_DB_USERNAME,
  password: process.env.PROD_DB_PASSWORD,
  database: process.env.PROD_DB_NAME,
  host: process.env.PROD_DB_HOSTNAME,
  port: process.env.PROD_DB_PORT,
  dialect: "postgres",
};

export default { development, test, production };
