const { pool } = require('./db');

async function deleteById(id) {
    const text = `DELETE FROM query WHERE id = ${id}`;
    try {
        const res = await pool.query(text);
        console.log(`Result with id = ${id} deleted`);
        // console.log(res);
    } catch (error) {
        console.error(error);
    }
}

// deleteById(1);

module.exports = deleteById;