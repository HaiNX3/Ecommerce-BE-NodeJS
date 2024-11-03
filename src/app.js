const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init DB
require('./dbs/init.mongodb');

// init routes
app.get('/', (req, res, next) => {
  const strCompress = 'Hello World';
  return res.status(200).json({
    message: 'Welcome to my API',
  });
});
// handling error

module.exports = app;
