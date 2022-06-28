var stackexchange = require("stackexchange");

async function sof(text, callback) {
  var options = { version: 2.3 };
  var context = new stackexchange(options);

  var filter = {
    pagesize: 10,
    intitle: text,
    sort: "relevance",
    order: "desc",
    site: "stackoverflow",
  };

  // Get all the questions (http://api.stackexchange.com/docs/questions)
  context.search.search(filter, function (err, results) {
    if (err) callback(err);

    let res = { results: [ ...results.items ] };
    callback(null, res);
    // console.log(results.has_more);
  });
}

module.exports = sof;
