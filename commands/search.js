const WebAPI = require("../lib/WebAPI");
const sof = require("../lib/stackexchangeAPI");
const KeyManager = require("../lib/KeyManager");
const Database = require("../database/Database");
const inquirer = require("inquirer");
const inquireOpen = require("../utils/inquire-open");
const printRes = require("../utils/print");

const search = {
  web(cmd) {
    const key = new KeyManager();
    const webApiKey = key.getKey();
    const webapi = new WebAPI(webApiKey);
    webapi.getSearchData(cmd.text, (err, res) => {
      if (err) {
        throw err;
      }
      print(res);
    });
  },

  sof(cmd) {
    sof(cmd.text, (err, res) => {
      if (err) {
        throw err;
      }
      print(res);
    });
  },
};

async function inquireSave(resultsArr) {
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "toSave",
      message: "Do you want to save any result? ".green + "y/n",
    },
  ]);

  if (input && (input.toSave == "y" || input.toSave == "Y")) {
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "resNo",
        message: "Result number? ".green,
      },
    ]);

    const db = new Database();
    await db.createTable();
    await db.save(resultsArr[input.resNo - 1]);
    await db.showAllRows();
    await inquireSave(resultsArr);
  }
}

async function inquire(resultsArr) {
  await inquireOpen(resultsArr);
  console.log();
  await inquireSave(resultsArr);
}

function print(res, isFromSof) {
  printRes(res, isFromSof, inquire);
}

module.exports = search;
