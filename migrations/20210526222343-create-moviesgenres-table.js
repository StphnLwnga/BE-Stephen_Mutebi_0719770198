'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MoviesGenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieID: {
        type: Sequelize.STRING
      },
      genreID: {
        type: Sequelize.INTEGER
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MoviesGenres');
  }
};
