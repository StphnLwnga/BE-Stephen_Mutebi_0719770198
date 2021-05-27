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

/** Each movie index corresponds to the movie title's id in Movies table plus 1
 * As well as each genre's index with its corresponding id in the Genres table plus 1
 * Iterate over each movie, extracting the movie id and the corresponding genre ids
 */
let moviesGenresIds = movies.map((m, i) => {
  let movieId = i + 1;

  return genres
    .map((genre, j) => {
      let genreId = j + 1;

      if (m.genre.split('|').includes(genre)) return genreId;
    })
    .filter(genreId => genreId !== undefined)
    .map(genreId => ({ movieId, genreId }));
}).flat();

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'MoviesGenres',
      moviesGenresIds.map(mGId => ({ movieId: mGId.movieId, genreId: mGId.genreId })), 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MoviesGenres', null, {});
  }
};
