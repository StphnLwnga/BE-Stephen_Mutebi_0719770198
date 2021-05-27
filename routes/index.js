const express = require('express');
const router = express.Router();

// environmental constiables from .env file
const dotenv = require('dotenv');
dotenv.config();

/* GET home page. */
router.get('/', function (req, res, next) {

  const mysql = require('mysql2');

  const db = mysql.createConnection({
    connectionLimit: process.env.DB_CONLIMIT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  // Connect to database
  db.connect(err => {
    if (err) throw err;
    console.log(`Connected to database - ${process.env.DB_DATABASE}`);
  });
  global.db = db;

  const sql= `SELECT g.genreID, g.genre,
    COUNT(m.movieID) as movieCount
    FROM Genres g LEFT JOIN MoviesGenres m
    ON m.genreID = g.genreID
    GROUP BY g.genreID, g.genre;`;

  db.promise()
    .execute(sql)
    .then(([rows]) => {
      // console.log(rows)
      res.render('index', { title: 'BD Technical Test', data: rows });
    }).catch(err => {
      throw err;
    });
});

module.exports = router;
