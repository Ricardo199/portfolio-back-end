// Load environment variables from the secrets file
require('dotenv').config({ path: './config/secrets.env' });

// Construct the MongoDB connection string using environment variable for the password
const connectionString = `mongodb+srv://ricardo1529:${process.env.DB_PASSWORD}@midterm.fuok2.mongodb.net/?retryWrites=true&w=majority&appName=Midterm`;

// Export the connection string for use in the application
module.exports = {
    ATLASDB: connectionString
};