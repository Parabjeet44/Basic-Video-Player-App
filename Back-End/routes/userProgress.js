const express = require('express');
const router = express.Router();
const UserProgress = require('../models/UserProgress'); // Assume you've created a UserProgress model

// Create or update user progress
router.post('/', async (req, res) => {
  const { userId, videoId, progress } = req.body;
  try {
    const progressData = await UserProgress.findOneAndUpdate(
      { userId, videoId },
      { progress },
      { upsert: true, new: true }
    );
    res.status(200).send(progressData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get progress by userId and videoId
router.get('/:userId/:videoId', async (req, res) => {
  try {
    const progress = await UserProgress.findOne({
      userId: req.params.userId,
      videoId: req.params.videoId,
    });
    res.send(progress);
  } catch (err) {
    res.status(404).send({ error: 'Progress not found' });
  }
});

module.exports = router;
