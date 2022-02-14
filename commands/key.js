const inquirer = require("inquirer")
const colors = require("colors")
const KeyManager = require("../lib/KeyManager")
const {isRequired} = require("../utils/validation")

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "webSearch",
                message: "Enter Web Search API Key ".green + "https://rapidapi.com/contextualwebsearch/api/web-search/",
                validate: isRequired
            },
            {
                type: "input",
                name: "stackOverflow",
                message: "Enter Stack Overflow API Key ".green + "https://api.stackexchange.com/",
                validate: isRequired
            },
            {
                type: "input",
                name: "medium",
                message: "Enter Medium API Key ".green + "https://rapidapi.com/nishujain1997.19@gmail.com/api/medium2/",
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input)

        if (key) {
            console.log("API Key Set".blue);
        }
    },
    show() {

    },
    remove() {

    }
}

module.exports = key