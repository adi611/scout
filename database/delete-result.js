const { pool } = require("./postgres-connect");

async function deleteById(id) {
  const text = `DELETE FROM searches WHERE id = ${id}`;
  try {
    const res = await pool.query(text);
    console.log(`Result with id = ${id} deleted`);
  } catch (error) {
    console.error("Error deleting saved/bookmarked result");
  }
}

module.exports = deleteById;
