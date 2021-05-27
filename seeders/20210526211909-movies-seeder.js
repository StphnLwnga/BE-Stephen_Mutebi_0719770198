'use strict';
const fs = require('fs');

// Import the JSON file from the project root
let rawdata = fs.readFileSync('download.json');

let movies = JSON.parse(rawdata);

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'Movies',
      movies.map(m => ({ title: m.title })), 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Movies', null, {});
  }
};
