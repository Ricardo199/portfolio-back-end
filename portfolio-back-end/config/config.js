require('dotenv').config(); // Import dotenv module
const password = process.env.DB_PASSWORD;
const username = 'ricardo1529';
const cluster = 'midterm.fuok2.mongodb.net';
const dbName = 'portfolio';

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=Midterm`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});