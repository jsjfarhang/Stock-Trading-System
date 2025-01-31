const express = require('express');
const app = express();
const PORT = process.env.PORT;
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);

app.use(express.json());

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

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
  res.redirect('/login');
});

/*
app.get('/login', (req, res) => {

});
*/