"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Authors", [
      {
        authorName: "Stephen King",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorName: "Agatha Christie",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorName: "Сергей Лукьяненко",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorName: "Лев Толстой",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorName: "Aaron Becker",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorName: "Софья Богатырёва",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorName: "William Shakespeare",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", null, {});
  },
};
