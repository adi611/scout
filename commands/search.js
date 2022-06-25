const WebAPI = require('../lib/WebAPI')
const KeyManager = require("../lib/KeyManager")
const Database = require('../database/DB2')
const terminalLink = require('terminal-link');
const colors = require("colors");
const inquirer = require("inquirer");

const search = {
    web(cmd) {
        // console.log("web");
        const key = new KeyManager();
        const webApiKey = key.getKey().apiKey_websearch;
        const webapi = new WebAPI(webApiKey);
        webapi.getSearchData(cmd.text, (err, res) => {
            if (err) {
                throw err;
            }

            print(res);
        });
        // const res = webapi.res;
        // print(res);
    }
}

async function inquire(resultsArr) {
    const input = await inquirer.prompt([
        {
            type: "input",
            name: "toSave",
            message: "Do you want to save any result? ".green + "y/n",
        }
    ])

    if (input && (input.toSave == "y" || input.toSave == "Y")) {
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "resNo",
                message: "Result number? ".green,
            }
        ])
        // console.log(input.resNo);
        const db = new Database();
        db.save(resultsArr[input.resNo])
            .then(res => db.showAllRows());
    }
}

function print(res) {
    // console.log(res);
    let count = 1;
    const featured = res.featured_snippet ? featured_snippet : null;
    if (featured) {
        const titleLink = terminalLink(featured.title, featured.link);
        console.log("\nTop result:\n".blue);
        console.log("[" + count + "] " + "Title: ".yellow + titleLink.white);
        // console.log("Link: " + featured.link);
        console.log("    Description: ".yellow + featured.description.white);
        count++;
    }
    console.log();

    featured ? console.log("More results:\n".blue) : console.log("Top results:\n".blue);
    const results = res.results;
    // let table = [];
    results.forEach(element => {
        const titleLink = terminalLink(element.title, element.link);
        console.log("[" + count + "] " + "Title: ".yellow + titleLink.white);
        console.log("    Description: ".yellow + element.description.grey);
        console.log("------------------------------------------------------------");
        count++;
    });
    const resultsArr = [res.featured_snippet, ...res.results];
    inquire(resultsArr);
}

module.exports = search;