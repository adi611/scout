#!/usr/bin/env node
const program = require("commander")
const pkg = require("../package.json")

program
    .version(pkg.version)
    .command("key", "Web Search API: https://rapidapi.com/contextualwebsearch/api/web-search/"
                    +"\nMedium API: https://rapidapi.com/nishujain1997.19@gmail.com/api/medium2/"
                    +"\nStackoverflow API: https://api.stackexchange.com/")
    .command("search", "Search For Doubts")
    .parse(process.argv)
