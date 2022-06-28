const { pool } = require('./db');
const inquireOpen = require('../utils/inquire-open')
const print = require('../utils/print')

async function showAllRows(isInquire) {
    const text = `SELECT * from query`
    try {
        const res = await pool.query(text);
        print(res.rows, true);
        if (isInquire) {
            await inquireOpen(res.rows, true)   // true -> called from show-saved-results.js
        }
        return true;
    } catch (error) {
        console.error(error);
    }
}

// showAllRows(true);

module.exports = showAllRows;