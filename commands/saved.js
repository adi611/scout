const Database = require('../database/Database');

const saved = {
    async show() {
        const db = new Database();
        await db.showAllRows(true);
    },

    async delete(id) {
        const db = new Database();
        await db.deleteById(id);
    }
}

module.exports = saved;