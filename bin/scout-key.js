const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description(
    "Set API key(s)" +
      "\nWeb Search API: https://rapidapi.com/contextualwebsearch/api/web-search/" +
      "\nMedium API: https://rapidapi.com/nishujain1997.19@gmail.com/api/medium2/" +
      "\nStackoverflow API: https://api.stackexchange.com/"
  )
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);

program
  .command("remove")
  .description(
    "Remove API key(s)." +
      "\nTo remove specific keys:" +
      "\nwebsearch -> Remove only the Web Search API Key" +
      "\nstackoverflow -> Remove only the Stack Overflow API Key" +
      "\nmedium -> Remove only the Medium API Key" +
      "\nIf not specified all keys will be removed."
  )
  .option("--title <title>", "Specify the API key to remove.", "")
  .action((cmd) => key.remove("apiKey_" + cmd.title));

program.parse(process.argv);
