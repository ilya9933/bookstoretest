"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Books", [
      {
        nameBook: "The Shining",
        authorId: 1,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "Carrie",
        authorId: 1,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "It",
        authorId: 1,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "It 2",
        authorId: 2,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "It 3",
        authorId: 2,
        publisherId: 3,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "Carrie 2",
        authorId: 3,
        publisherId: 4,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "Carrie 3",
        authorId: 3,
        publisherId: 2,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 2",
        authorId: 4,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 4",
        authorId: 4,
        publisherId: 2,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 3",
        authorId: 4,
        publisherId: 2,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 5,
        publisherId: 3,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 5,
        publisherId: 4,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 5,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 6,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 5,
        publisherId: 3,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 6,
        publisherId: 2,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 6,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 6,
        publisherId: 3,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 7,
        publisherId: 4,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 7,
        publisherId: 3,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 7,
        publisherId: 2,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameBook: "The Shining 5",
        authorId: 7,
        publisherId: 1,
        price: 99,
        description: `The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Books", null, {});
    };
  },
};
