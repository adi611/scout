const { pool } = require("./postgres-connect");
async function createTable() {
  const text = `
        CREATE TABLE IF NOT EXISTS "query" (
            "id" SERIAL,
            "title" VARCHAR(100) NOT NULL,
            "url" VARCHAR(1000) NOT NULL,
            "description" VARCHAR(10000) NOT NULL,
            PRIMARY KEY ("id")
        );`;
  try {
    const res = await pool.query(text);
    console.log("Table created");
    return true;
  } catch (error) {
    console.error(error);
  }
}

module.exports = createTable;
