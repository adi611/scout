const { pool } = require('./postgres-connect');

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

// for (let i = 3; i <= 15; i++) {
//     deleteById(i);
// }
// deleteById(16);

module.exports = deleteById;