const deleteById = require("../database/delete-result");

test("delete by id", async () => {
  expect.assertions(1);
  const res = await deleteById();
  expect(res).toBeFalsy(); // falsy since no id passed to function
});
