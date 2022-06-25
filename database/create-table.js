const { pool } = require('./db')
async function create() {
    const text = `
        CREATE TABLE IF NOT EXISTS "query" (
            "id" SERIAL,
            "title" VARCHAR(100) NOT NULL,
            "url" VARCHAR(100) NOT NULL,
            "description" VARCHAR(1000) NOT NULL,
            PRIMARY KEY ("id")
        );`;
    try {
        const res = await pool.query(text);
        console.log("Table created");
        // console.log(res.rows);
        return true;
    } catch (error) {
        console.error(error);
    }
}

module.exports = create;