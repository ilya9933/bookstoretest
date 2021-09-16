"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Genres", [
      {
        genreName: "fantasy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        genreName: "horror",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        genreName: "detective",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        genreName: "classic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        genreName: "journey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        genreName: "textbooks",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        genreName: "kids",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        genreName: "poetry",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
