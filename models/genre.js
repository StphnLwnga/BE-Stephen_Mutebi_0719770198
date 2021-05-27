'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(model.Movie, { as: 'MoviesInGenres', through: models.MoviesGenres, foreignKey: 'genreID' });
    }
  };
  Genre.init({
    genreID: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};