const Configstore = require("configstore")
const pkg = require("../package.json")

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set("apiKey_websearch", key.webSearch)
        this.conf.set("apiKey_stackoverflow", key.stackOverflow)
        this.conf.set("apiKey_medium", key.medium)

        return key;
    }

    getKey(isRunningFromCLI) {
        const key = {
            apiKey_websearch: this.conf.get("apiKey_websearch"),
            apiKey_stackoverflow: this.conf.get("apiKey_stackoverflow"),
            apiKey_medium: this.conf.get("apiKey_medium")
        }

        let err = "API Key(s) Not Found - Get keys at: ";

        if (!key.apiKey_websearch) {
            err += "\nWeb Search API: https://rapidapi.com/contextualwebsearch/api/web-search/";
        }
        if (!key.apiKey_stackoverflow) {
            err += "\nStackoverflow API: https://api.stackexchange.com/";
        }
        if (!key.apiKey_medium) {
            err += "\nMedium API: https://rapidapi.com/nishujain1997.19@gmail.com/api/medium2/";
        }

        if (err.length > 36 && !isRunningFromCLI) {
            throw new Error(err);
        }

        return key;
    }

    deleteKey(keyToDelete) {
        const key = {
            apiKey_websearch: this.conf.get("apiKey_websearch"),
            apiKey_stackoverflow: this.conf.get("apiKey_stackoverflow"),
            apiKey_medium: this.conf.get("apiKey_medium")
        }

        if (!key[keyToDelete]) {
            throw new Error("API Key Not Found")
        }

        console.log(keyToDelete);
        for (const apiKey in key) {
            if (keyToDelete === '') {
                this.conf.delete(apiKey)
            } else if (keyToDelete === apiKey) {
                this.conf.delete(apiKey)
            }
        };

    }
}

module.exports = KeyManager;