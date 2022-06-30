const saved = require("../commands/saved");

test("users asks to show the saved result(s)", async () => {
  expect(saved.show).toBeDefined();
});

test("users asks to delete the saved result(s)", async () => {
  const res = await saved.delete();
  expect(res).toBeFalsy(); // falsy since no id is passed
});
