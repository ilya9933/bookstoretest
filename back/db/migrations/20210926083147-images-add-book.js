"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Images", "bookId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Books",
        key: "id",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Images", "bookId");
  },
};
