const Database = require("../database/Database");

const saved = {
  async show() {
    try {
      const db = new Database();
      await db.showAllRows(true);
    } catch (error) {
      console.log("Error while showing the saved/bookmarked results");
    }
  },

  async delete(id) {
    try {
      const db = new Database();
      return await db.deleteById(id);
    } catch (error) {
      console.log("Error deleting saved/bookmarked result");
      return false;
    }
  },
};

module.exports = saved;
