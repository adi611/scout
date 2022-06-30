const db = require("../commands/db");

test("set db configurations", async () => {
  expect(db.set).toBeDefined();
});

test("show db configurations", async () => {
  expect(db.show).toBeDefined();
});
