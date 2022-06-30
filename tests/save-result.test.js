const save = require("../database/save-result");

test("save result works", async () => {
  expect.assertions(1);
  const res = await save();
  expect(res).toBeFalsy(); // falsy since no param paased to save()
});
