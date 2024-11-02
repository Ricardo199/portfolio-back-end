require('dotenv').config();

const password = process.env.DB_PASSWORD;

module.exports = {
    "ATLASDB":"mongodb+srv://ricardo1529:${password}@midterm.fuok2.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Midterm"
};