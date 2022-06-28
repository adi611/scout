const { pool } = require("./postgres-connect");
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

    async showAllRows(isInquire) {
        return await showAllRows(isInquire);
    }

}

module.exports = Database;