const search = require("../commands/search");

test("user uses web search", () => {
  expect(search.web).toBeDefined();
});

test("user uses stackoverflow search", () => {
  expect(search.sof).toBeDefined();
});
