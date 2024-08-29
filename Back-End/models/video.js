const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  duration: Number,
  // other metadata as required
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
