const Configstore = require("configstore")
const pkg = require("../package.json")

class DbManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setDb() {
        
    }

    getDb() {

    }
}