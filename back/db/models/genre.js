"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Genre.belongsToMany(models.Book, {
        through: "BookGenre",
        foreignKey: "genreId",
        as: "book",
        unique: false,
      });
    }
  }
  Genre.init(
    {
      genreName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Genre",
    }
  );
  return Genre;
};
