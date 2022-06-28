#!/usr/bin/env node
const program = require("commander")
const pkg = require("../package.json")

program
    .version(pkg.version)
    .command("key", "Web Search API: https://rapidapi.com/apigeek/api/google-search3/"
        + "\nMedium API: https://rapidapi.com/nishujain1997.19@gmail.com/api/medium2/"
        + "\nStackoverflow API: https://api.stackexchange.com/")
    .command("db", "Manage PostgreSQL database")
    .command("search", "Search For Doubts")
    .command("saved", "Show/Delete the saved/bookmarked results")
    .parse(process.argv)