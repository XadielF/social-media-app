const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');

// Get all tweets
router.get('/', async (req, res) => {
  try {
    const tweets = await Tweet.find().populate('author', 'username');
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new tweet
router.post('/', async (req, res) => {
  const tweet = new Tweet({
    text: req.body.text,
    author: req.body.author,
  });
  try {
    const newTweet = await tweet.save();
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;