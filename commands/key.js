const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();

    const input = await inquirer.prompt([
      {
        type: "input",
        name: "webSearch",
        message:
          "Enter Web Search API Key ".green +
          "https://rapidapi.com/apigeek/api/google-search3/",
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

      console.log("Web Search API: ".cyan, key.apiKey_websearch.yellow);
    } catch (error) {
      console.error(error.message.red);
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log("Key Removed".blue);
      return;
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = key;
