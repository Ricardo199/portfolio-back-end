require('dotenv').config(); // Import dotenv module
const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://ricardo1529:${password}@midterm.fuok2.mongodb.net/?retryWrites=true&w=majority&appName=Midterm`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});