'use strict';

const fs = require('fs');

// Import the JSON file from the project root
let rawdata = fs.readFileSync('download.json');

let movies = JSON.parse(rawdata);

// Create a set to store unique genres
let genre_set = new Set();

/* Iterate over each movie, splitting the genres string 
 * into individual genres, and adding them to genre_set
 */
movies.map(movie => movie.genre.split('|').map(g => genre_set.add(g)));

// Convert genre_set to an array sorted alphabetically
let genres = Array.from(genre_set).sort();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Genres',
      genres.map(genre => ({ genre })), 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Genres', null, {});
  }
};
