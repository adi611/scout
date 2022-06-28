const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey_websearch", key.webSearch);

    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey_websearch");

    if (!key) {
      throw new Error(
        "API Key Not Found - Get key at: https://rapidapi.com/apigeek/api/google-search3/"
      );
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey_websearch");

    if (!key) {
      throw new Error("API Key Not Found");
    }

    this.conf.delete("apiKey_websearch");

    return;
  }
}

module.exports = KeyManager;
