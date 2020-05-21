var mongoose = require('mongoose');
var chalk = require('chalk');
var dbURL = require('./properties').DB;

require('dotenv').config()

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

const options = {
  connectTimeoutMS: 10000,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

module.exports = function () {

  mongoose.connect(dbURL, options);

  mongoose.connection.on('connected', function () {
    console.log(connected("Mongoose default connection is open to ", dbURL));
  });

  mongoose.connection.on('error', function (err) {
    console.log(error("Mongoose default connection has occured " + err + " error"));
  });

  mongoose.connection.on('disconnected', function () {
    console.log(disconnected("Mongoose default connection is disconnected"));
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(termination("Mongoose default connection is disconnected due to application termination"));
      process.exit(0)
    });
  });
}