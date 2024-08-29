const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: String,
  videoId: String,
  progress: Number,
  lastWatched: Date,
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);
module.exports = UserProgress;
