const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

const indexRouter = require('../routes/index');
const contactsRouter = require('../routes/contacts');
const usersRouter = require('../routes/users');

const app = express();

// Middleware for logging HTTP requests and errors
app.use(logger('dev'));

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// Route handling for the root path
app.use('/', indexRouter);

// Route handling for contacts-related endpoints
app.use('/api/contacts', contactsRouter);

// Route handling for users-related endpoints
app.use('/api/users', usersRouter);

// Catch 404 errors and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500); // Set response status
    res.json({ 
        success: false,
        message: err.message  // Send error message as JSON response
    });
});

module.exports = app;