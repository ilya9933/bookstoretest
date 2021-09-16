"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Book.belongsToMany(models.Genre, {
        through: "BookGenre",
        foreignKey: "bookId",
        as: "genre",
        unique: false,
      });
      models.Book.belongsTo(models.Author, {
        foreignKey: "authorId",
        as: "author",
      });
      models.Book.belongsTo(models.Publisher, {
        foreignKey: "publisherId",
        as: "publisher",
      });
    }
  }
  Book.init(
    {
      nameBook: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      publisherId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
