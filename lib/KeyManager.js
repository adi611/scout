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

    getKey() {
        const key = {
            apiKey_websearch: this.conf.get("apiKey_websearch"),
            apiKey_stackoverflow: this.conf.get("apiKey_stackoverflow"),
            apiKey_medium: this.conf.get("apiKey_medium")
        }

        if(!key) {
            throw new Error("No API Key Found")
        }

        return key;
    }

    deleteKey(keyToDelete) {
        const key = {
            apiKey_websearch: this.conf.get("apiKey_websearch"),
            apiKey_stackoverflow: this.conf.get("apiKey_stackoverflow"),
            apiKey_medium: this.conf.get("apiKey_medium")
        }

        if(!key) {
            throw new Error("No API Key Found")
        }

        key.forEach(apiKey => {
            if (apiKey === keyToDelete) {
                this.conf.delete(keyToDelete)
            }
        });

        return key;
    }
}

module.exports = KeyManager;