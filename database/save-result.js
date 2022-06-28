const { pool } = require("./postgres-connect");

async function save(result) {
    const title = result.title;
    const url = result.link ? result.link : result.url;
    const description = result.description !== '' ? result.description : '';

    // title = title.replace(/['"]+/g, '')

    const text = `
    INSERT INTO query (title, url, description) 
    VALUES ($1, $2, $3)`;

    // console.log(text);

    try {
        const res = await pool.query(text, [title, url, description]);
        console.log("Values inserted");
        return true;
    } catch (error) {
        console.error(error);
    }
}

// save({ title: "test", url: "test-url-2", description: "test-description" });

module.exports = save;