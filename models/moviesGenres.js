'use strict';
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class MoviesGenres extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			MoviesGenres.belongsTo(models.Movie, { foreignKey: 'movieID', targetKey: 'movieID', as: 'Movie' });
			MoviesGenres.belongsTo(models.Genre, { foreignKey: 'genreID', targetKey: 'genreID', as: 'Genre' });
		}
	};
	MoviesGenres.init({
		moviesGenresID: DataTypes.INTEGER,
		movieID: DataTypes.INTEGER,
		genreID: DataTypes.INTEGER
	});
	return MoviesGenres;
}