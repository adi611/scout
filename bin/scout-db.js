const program = require("commander");
const db = require("../commands/db");

program
  .command("set")
  .description("Set-up PostgreSQL database")
  .action(() => db.set());

program
  .command("show")
  .description("Show cuurent PostgreSQL database configuration")
  .action(() => db.show());
program.parse(process.argv);
