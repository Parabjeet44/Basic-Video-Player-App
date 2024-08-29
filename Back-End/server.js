const express = require('express');
const mongoose = require('mongoose');
const videosRouter = require('./routes/videos');
const userProgressRouter = require('./routes/userProgress');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allows your frontend to communicate with the backend

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Video Progress Tracking API!');
});

// Routes for videos and user progress
app.use('/api/videos', videosRouter);
app.use('/api/progress', userProgressRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
