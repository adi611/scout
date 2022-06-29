const Database = require("../database/Database");

const saved = {
  async show() {
    const db = new Database();
    try {
      await db.showAllRows(true);
    } catch (error) {
      console.log("Error while showing the saved/bookmarked results");
    }
  },

  async delete(id) {
    const db = new Database();
    try {
      await db.deleteById(id);
    } catch (error) {
      console.log("Error deleting saved/bookmarked result");
    }
  },
};

module.exports = saved;
