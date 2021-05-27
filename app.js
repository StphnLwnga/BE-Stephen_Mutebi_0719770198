const createError = require('http-errors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const logger = require('./config/winston');
const morganMiddleware = require('./config/morganMiddleware')

// environmental constiables from .env file
const dotenv = require('dotenv');
dotenv.config();

const config = require("./config/config.js");

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(morgan(morganMiddleware));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;