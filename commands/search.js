const WebAPI = require('../lib/WebAPI')
const KeyManager = require("../lib/KeyManager")
const search = {
    web(cmd) {
        // console.log("web");
        const key = new KeyManager();
        const webApiKey = key.getKey().apiKey_websearch;
        const webapi = new WebAPI(webApiKey);
        webapi.getSearchData(cmd.text);
    }
}

module.exports = search;