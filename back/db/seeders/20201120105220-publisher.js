"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Publishers", [
      {
        publisherName: "Doubleday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        publisherName: "Doubleday 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        publisherName: "Doubleday 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        publisherName: "Doubleday 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Publishers", null, {});
  },
};
