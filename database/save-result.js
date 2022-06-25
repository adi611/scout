const { pool } = require("./db");

async function save(result) {
    const title = result.title;
    const url = result.url;
    const description = result.description;

    const text = `
    INSERT INTO query (title, url, description) 
    VALUES ('${title}', '${url}', '${description}')`;

    // console.log(text);

    try {
        const res = await pool.query(text);
        console.log("Values inserted");
        return true;
    } catch (error) {
        console.error(error);
    }
}

// save({ title: "test", url: "test-url-2", description: "test-description" });

module.exports = save;