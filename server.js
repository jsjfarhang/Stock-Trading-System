require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);

app.use(express.json());
app.use(express.static('public'));

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
}
connectDB();

app.get('/', (req, res) => {
  res.render(__dirname + '/views/login.ejs');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
