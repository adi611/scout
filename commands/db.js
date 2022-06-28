const inquirer = require("inquirer");
const colors = require("colors");
const DbManager = require("../lib/DbManager");
const { isRequired } = require("../utils/validation");

const db = {
  async set() {
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "host",
        message: "Enter Host/Endpoint ".green,
        validate: isRequired,
      },
      {
        type: "input",
        name: "port",
        message: "Enter Port ".green,
        validate: isRequired,
      },
      {
        type: "input",
        name: "dbname",
        message: "Enter Database Name ".green,
        validate: isRequired,
      },
      {
        type: "input",
        name: "username",
        message: "Enter Username ".green,
        validate: isRequired,
      },
      {
        type: "input",
        name: "password",
        message: "Enter Password ".green,
        validate: isRequired,
      },
    ]);

    const dbmanager = new DbManager();
    dbmanager.setDb(input);
  },

  show() {
    const dbmanager = new DbManager();
    const dbconfig = dbmanager.getDb();

    console.log(`\nHost/Endpoint: ${dbconfig.host}` +
                `\nPort: ${dbconfig.port}` +
                `\nDatabase Name: ${dbconfig.dbname}` +
                `\nUsername: ${dbconfig.username}` +
                `\nPassword: ${dbconfig.password}`);
  },
};

module.exports = db;
