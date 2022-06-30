const { pool } = require("./postgres-connect");
async function createTable() {
  try {
    const text = `
        CREATE TABLE IF NOT EXISTS "searches" (
            "id" SERIAL,
            "title" VARCHAR(100) NOT NULL,
            "link" VARCHAR(1000) NOT NULL,
            "description" VARCHAR(10000),
            PRIMARY KEY ("id")
        );`;

    const res = await pool.query(text);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = createTable;
