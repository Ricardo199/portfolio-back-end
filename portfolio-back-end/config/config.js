require('dotenv').config({ path: './config/secrets.env' });

const connectionString = `mongodb+srv://ricardo1529:${process.env.DB_PASSWORD}@midterm.fuok2.mongodb.net/?retryWrites=true&w=majority&appName=Midterm`;

module.exports = {
    ATLASDB: connectionString
};