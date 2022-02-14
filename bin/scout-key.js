const program = require("commander");
const key = require("../commands/key")

program
    .command("set")
    .description("Set API key(s)" + "\nWeb Search API: https://rapidapi.com/contextualwebsearch/api/web-search/"
    +"\nMedium API: https://rapidapi.com/nishujain1997.19@gmail.com/api/medium2/"
    +"\nStackoverflow API: https://api.stackexchange.com/")
    .action(key.set)

program
.command("show")
.description("Show API key(s)")
.action(key.show)

program
    .command("remove")
    .description("Remove API key(s)")
    .action(key.remove)

program.parse(process.argv)