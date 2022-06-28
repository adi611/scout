const Configstore = require("configstore")
const pkg = require("../package.json")

class DbManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setDb(dbconfig) {
        this.conf.set("RDS_HOSTNAME", dbconfig.host)
        this.conf.set("RDS_PORT", dbconfig.port)
        this.conf.set("RDS_DB_NAME", dbconfig.dbname)
        this.conf.set("RDS_USERNAME", dbconfig.username)
        this.conf.set("RDS_PASSWORD", dbconfig.password)
    }

    getDb() {
        const dbconfig = {
            host: this.conf.get("RDS_HOSTNAME"),
            port: this.conf.get("RDS_PORT"),
            dbname: this.conf.get("RDS_DB_NAME"),
            username: this.conf.get("RDS_USERNAME"),
            password: this.conf.get("RDS_PASSWORD")
        }

        return dbconfig;
    }
}

module.exports = DbManager;