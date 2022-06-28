const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    let keys = {};
    keys = keyManager.getKey(true);

    const input = await inquirer.prompt([
      {
        type: "input",
        name: "webSearch",
        message:
          "Enter Web Search API Key ".green +
          "https://rapidapi.com/apigeek/api/google-search3/",
        validate: isRequired,
      },
      {
        type: "input",
        name: "stackOverflow",
        message:
          "Enter Stack Overflow API Key ".green +
          "https://api.stackexchange.com/",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input);

    if (key) {
      console.log("API Key Set".blue);
    }
  },

  show() {
    const keyManager = new KeyManager();

    try {
      const key = keyManager.getKey();
      if (key.apiKey_websearch)
        console.log("Web Search API: ".cyan, key.apiKey_websearch.yellow);
      if (key.apiKey_stackoverflow)
        console.log(
          "Stack Overflow API: ".cyan,
          key.apiKey_stackoverflow.yellow
        );
    } catch (error) {
      console.error(error.message.red);
    }
  },

  remove(title) {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey(title);

      console.log("Key Removed".blue);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = key;
