// Required fields
const isRequired = (input) => (input === "" ? "This value is required" : true);
const isNotRequired = (input) => (input === "" ? true : true);

module.exports = { isRequired, isNotRequired };
