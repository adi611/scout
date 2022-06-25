const { Client, Pool } = require('pg');
require('dotenv').config();

class Database {
    constructor(resNo) {
        console.log(resNo);
        this.client = new Pool({
            host: process.env.RDS_HOSTNAME,
            user: process.env.RDS_USERNAME,
            port: process.env.RDS_PORT,
            password: process.env.RDS_PASSWORD,
            database: process.env.RDS_DB_NAME
        })

        this.openConnection();

        const text = `
            CREATE TABLE IF NOT EXISTS "query" (
	            "id" SERIAL,
	            "title" VARCHAR(100) NOT NULL,
	            "url" VARCHAR(100) NOT NULL,
                "description" VARCHAR(1000) NOT NULL,
	            PRIMARY KEY ("id")
            );`;

        execute(this.client, text).then(result => {
            if (result) {
                console.log('Table created');
            }
        });
    }

    async openConnection() {
        try {
            await this.client.connect();
        } catch (error) {
            console.error(error);
        }
    }

    async closeConnection() {
        try {
            await this.client.end();
        } catch (error) {
            console.error(error);
        }
    }

    save(result) {
        const title = result.title;
        const url = result.url;
        const description = result.description;

        const text = `
        INSERT INTO (title, url, description) 
        values (${title}, ${url}, ${description})`;

        execute(this.client, text).then(result => {
            if (result) {
                console.log('Values inserted');
            }
        });

    }
}

const execute = async (client, query) => {
    try {
        // await client.connect();     // gets connection
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         // closes connection
    }
};

const timer = () => setTimeout(() => {
    db.closeConnection();
}, 2000)

const db = new Database(1);
timer();
db.save({ title: 'test', url: 'test-url', description: 'test-description' });



// db.closeConnection();

module.exports = Database;