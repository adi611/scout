const createTable = require("../database/create-table");

test("user creates a table", async () => {
  expect.assertions(1);
  const res = await createTable();
  expect(res).toBeTruthy();
});
