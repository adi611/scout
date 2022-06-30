const createTable = require("../database/create-table");

test("user creates a table", () => {
  expect(createTable).toBeDefined();
});
