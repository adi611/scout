const { pool } = require('./db');

async function showAllRows() {
    const text = `SELECT * from query`
    try {
        const res = await pool.query(text);
        console.table(res.rows);
        return true;
    } catch (error) {
        console.error(error);
    }
}

// showAllRows();

module.exports = showAllRows;