const program = require("commander");
const search = require("../commands/search");

program
  .command("web")
  .description("Search the query through the web")
  .option("--text <text>", "Search query")
  .action((cmd) => search.web(cmd));

program
  .command("sof")
  .description("Search the query through stackoverflow")
  .option("--text <text>", "Search query")
  .action((cmd) => search.sof(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
