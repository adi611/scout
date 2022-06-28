const { Pool } = require("pg");
const DbManager = require("../lib/DbManager");

const dbmanager = new DbManager();
const dbconfig = dbmanager.getDb();

const pool = new Pool({
  host: dbconfig.host,
  user: dbconfig.username,
  port: dbconfig.port,
  password: dbconfig.password,
  database: dbconfig.dbname,
});

module.exports = { pool };
