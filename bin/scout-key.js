const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description(
    "Set API key" +
      "\nWeb Search API: https://rapidapi.com/apigeek/api/google-search3/"
  )
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);

program.command("remove").description("Remove API key.").action(key.remove);

program.parse(process.argv);
