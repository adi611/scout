const { pool } = require('./db');
const inquireOpen = require('../utils/inquire-open')

async function showAllRows(isInquire) {
    const text = `SELECT * from query`
    try {
        const res = await pool.query(text);
        console.log(res.rows);
        if (isInquire) {
            await inquireOpen(res.rows)
        }
        return true;
    } catch (error) {
        console.error(error);
    }
}

// showAllRows(true);

module.exports = showAllRows;