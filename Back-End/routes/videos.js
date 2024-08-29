const express = require('express');
const router = express.Router();
const Video = require('../models/video'); // Assume you've created a Video model

// Create a new video entry
router.post('/', async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).send(video);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get video by ID
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.send(video);
  } catch (err) {
    res.status(404).send({ error: 'Video not found' });
  }
});

module.exports = router;
