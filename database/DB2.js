const { pool } = require("./db");
const createTable = require('./create-table');
const save = require('./save-result');
const deleteById = require('./delete-result');
const showAllRows = require('./show-saved-results');

class Database {
    async createTable() {
        return await createTable();
    }

    async save(result) {
        return await save(result);
    }

    async deleteById(id) {
        await deleteById(id);
    }

    async showAllRows() {
        return await showAllRows();
    }

}

// const db = new Database();
// const isCreated = db.createTable();

// if (isCreated) {
//     const res = async () => await db.save({ title: "a", url: "b-12", description: "c" })
//     const res2 = async () => await db.showAllRows()

//     res().then(res => res2())
// }

module.exports = Database;