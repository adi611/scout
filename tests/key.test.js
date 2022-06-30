const key = require("../commands/key");

test("user asks to sets api key", async () => {
  expect(key.set).toBeDefined();
});

test("user asks to show api key", async () => {
  expect(key.show).toBeDefined();
});

test("user asks to remove api key", async () => {
  expect(key.remove).toBeDefined();
});
