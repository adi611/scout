const terminalLink = require('terminal-link');
const colors = require("colors");

function print(res, isFromSaved, inquire) {
    // console.log(res);
    let count = 1;
    const featured = res.featured_snippet ? res.featured_snippet : null;
    if (featured) {
        const titleLink = terminalLink(featured.title, featured.link);
        console.log("\nTop result:\n".blue);
        console.log("[" + count + "] " + "Title: ".yellow + titleLink.brightCyan);
        // console.log("Link: " + featured.link);
        console.log("    Description: ".yellow + featured.description.brightWhite);
        count++;
    }
    console.log();

    isFromSaved ? console.log("Saved results:\n".brightMagenta) : featured ? console.log("More results:\n".brightMagenta) : console.log("Top results:\n".brightMagenta);
    const results = isFromSaved ? res : res.results;
    // let table = [];
    results.forEach(element => {
        const titleLink = terminalLink(element.title, isFromSaved ? element.url : element.link);
        console.log("[" + count + "] " + "Title: ".yellow + titleLink.brightCyan);
        console.log("    Description: ".yellow + element.description.brightWhite);
        console.log("------------------------------------------------------------");
        count++;
    });
    const resultsArr = res.featured_snippet ? [res.featured_snippet, ...results] : [...results];
    // console.log(resultsArr);
    isFromSaved ? '' : inquire(resultsArr);
}

module.exports = print;