let config = require('./config');

// Database setup
const mongoose = require('mongoose');

module.exports = function() {
    // Connect to MongoDB using the connection string from config
    mongoose.connect(config.ATLASDB);

    let mongodb = mongoose.connection;

    // Handle connection errors
    mongodb.on('error', console.error.bind(console, 'Connection Error: '));

    // Log a message when connected successfully
    mongodb.once('open', () => {
        console.log("====> Connected to MongoDB.");
    });
}