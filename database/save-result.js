const { pool } = require("./postgres-connect");

async function save(result) {
  const title = result.title;
  const link = result.link;
  const description = result.description !== "" ? result.description : "";

  const text = `
    INSERT INTO searches (title, link, description) 
    VALUES ($1, $2, $3)`;

  try {
    const res = await pool.query(text, [title, link, description]);
    console.log("Values inserted");
    return true;
  } catch (error) {
    console.error(error);
  }
}

module.exports = save;
