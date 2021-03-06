const { pool } = require("./postgres-connect");
const inquireOpen = require("../utils/inquire-open");
const print = require("../utils/print");

async function showAllRows(isInquire) {
  const text = `SELECT * from searches`;
  try {
    const res = await pool.query(text);
    print(res.rows, true);
    if (isInquire) {
      await inquireOpen(res.rows, true); // true -> called from show-saved-results.js
    }
    return true;
  } catch (error) {
    console.error("Error while showing the saved/bookmarked results");
  }
}

module.exports = showAllRows;
