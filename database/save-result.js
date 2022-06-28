const { pool } = require("./postgres-connect");

async function save(result) {
  const title = result.title;
  const url = result.link ? result.link : result.url;
  const description = result.description !== "" ? result.description : "";

  const text = `
    INSERT INTO query (title, url, description) 
    VALUES ($1, $2, $3)`;

  try {
    const res = await pool.query(text, [title, url, description]);
    console.log("Values inserted");
    return true;
  } catch (error) {
    console.error(error);
  }
}

module.exports = save;
