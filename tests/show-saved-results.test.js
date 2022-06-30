const showAllRows = require("../database/show-saved-results");

test("show() works when user saves a result", async () => {
  expect.assertions(1);
  const res = await showAllRows();
  expect(res).toBeTruthy();
});
