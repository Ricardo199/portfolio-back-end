#!/usr/bin/env node

/**
 * Module dependencies.
 */
require('dotenv').config(); // Load environment variables from .env file
var mongoose = require('mongoose'); // Import Mongoose for MongoDB
var express = require('express'); // Import Express framework
var debug = require('debug')('portfolio:server'); // Debug instance for project
var http = require('http'); // Import HTTP module

/**
 * Get password from environment variables.
 */
const password = process.env.DB_PASSWORD;
const username = 'ricardo1529';
const cluster = 'midterm.fuok2.mongodb.net';
const dbName = 'portfolio';

/**
 * Connect to MongoDB.
 */
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=Midterm`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Welcome to Portfolio Backend API');
});

/**
 * Get port from environment and store in Express.
 */
var app = express(); // Create an Express application
var port = normalizePort(process.env.PORT || '3000'); // Use environment port or default to 3000
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app); // Create an HTTP server with Express app

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind); // Debug instance for project
  console.log('==== The app is running on http://localhost:' + port );
}