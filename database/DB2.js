const { pool } = require("./db");
const create = require('./create-table');
const save = require('./save-result');

class Database {
    async create() {
        return await create();
    }

    async save(result) {
        await save(result);
    }


}

const db = new Database();
const isCreated = db.create();

if (isCreated) {
    db.save({ title: "a", url: "b", description: "c" });
}