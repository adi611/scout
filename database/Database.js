const { Client } = require('pg');
require('dotenv').config();

class Database {
    constructor(resNo) {
        console.log(resNo);
        this.client = new Client({
            host: process.env.HOST,
            user: process.env.USERNAME,
            port: process.env.PORT,
            password: process.env.MASTER_PASSWORD,
            database: process.env.DATABASE_NAME
        })

        this.client.connect();
    }

    query() {
        this.client.query(`Select * from public.cards`, (err, res) => {
            if (!err) {
                console.log(res.rows);
            } else {
                console.log(err.message);
            }
            this.client.end;
        })
    }
}

module.exports = Database;