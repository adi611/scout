const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey_websearch", key.webSearch);
    this.conf.set("apiKey_stackoverflow", key.stackOverflow);

    return key;
  }

  getKey(isRunningFromCLI) {
    const key = {
      apiKey_websearch: this.conf.get("apiKey_websearch"),
      apiKey_stackoverflow: this.conf.get("apiKey_stackoverflow"),
    };

    let err = "API Key(s) Not Found - Get keys at: ";

    if (!key.apiKey_websearch) {
      err +=
        "\nWeb Search API: https://rapidapi.com/apigeek/api/google-search3/";
    }
    if (!key.apiKey_stackoverflow) {
      err += "\nStackoverflow API: https://api.stackexchange.com/";
    }

    // 36 is length of err = "API Key(s) Not Found - Get keys at: "
    if (err.length > 36 && !isRunningFromCLI) {
      throw new Error(err);
    }

    return key;
  }

  deleteKey(keyToDelete) {
    const key = {
      apiKey_websearch: this.conf.get("apiKey_websearch"),
      apiKey_stackoverflow: this.conf.get("apiKey_stackoverflow"),
    };

    if (!key[keyToDelete]) {
      throw new Error("API Key Not Found");
    }

    this.conf.delete(keyToDelete);
  }
}

module.exports = KeyManager;
