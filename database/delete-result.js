const { pool } = require("./postgres-connect");

async function deleteById(id) {
  try {
    const text = `DELETE FROM searches WHERE id = ${id}`;
    const res = await pool.query(text);
    console.log(`Result with id = ${id} deleted`);

    return true;
  } catch (error) {
    console.error("Error deleting saved/bookmarked result");
    return false;
  }
}

module.exports = deleteById;
