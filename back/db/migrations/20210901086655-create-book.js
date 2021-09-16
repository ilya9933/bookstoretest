"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      nameBook: {
        type: Sequelize.STRING,
      },
      authorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Authors",
          key: "id",
        },
      },
      publisherId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Publishers",
          key: "id",
        },
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Books");
  },
};
