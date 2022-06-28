const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description(
    "Set API key(s)" +
      "\nWeb Search API: https://rapidapi.com/contextualwebsearch/api/web-search/"
  )
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);

program.command("remove").description("Remove API key.").action(key.remove);

program.parse(process.argv);
