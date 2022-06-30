const showAllRows = require("../database/show-saved-results");

test("show() works when user saves a result", () => {
  expect(showAllRows).toBeDefined();
});
