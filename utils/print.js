const terminalLink = require("terminal-link");
const colors = require("colors");

function print(res, isFromSaved, inquire) {
  let count = 1;
  const featured = res.featured_snippet ? res.featured_snippet : null;
  if (featured) {
    const titleLink = terminalLink(featured.title, featured.link);
    console.log("\nTop result:\n".blue);
    console.log("[" + count + "] " + "Title: ".yellow + titleLink.brightCyan);
    console.log("    Description: ".yellow + featured.description.brightWhite);
    count++;
  }
  console.log();

  isFromSaved
    ? console.log("Saved results:\n".brightMagenta)
    : featured
    ? console.log("More results:\n".brightMagenta)
    : console.log("Top results:\n".brightMagenta);
  const results = isFromSaved ? res : res.results;

  results.forEach((element) => {
    const titleLink = terminalLink(
      element.title,
      isFromSaved ? element.url : element.link
    );
    console.log("[" + count + "] " + "Title: ".yellow + titleLink.brightCyan);
    console.log("    Description: ".yellow + element.description.brightWhite);
    isFromSaved ? console.log("    ID: ".yellow + element.id) : "";
    console.log("------------------------------------------------------------");
    count++;
  });
  const resultsArr = res.featured_snippet
    ? [res.featured_snippet, ...results]
    : [...results];

  isFromSaved ? "" : inquire(resultsArr);
}

module.exports = print;
