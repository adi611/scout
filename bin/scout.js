#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command(
    "key",
    "Web Search API: https://rapidapi.com/apigeek/api/google-search3/"
  )
  .command("db", "Manage PostgreSQL database")
  .command("search", "Search For Doubts")
  .command("saved", "Show/Delete the saved/bookmarked results")
  .parse(process.argv);
