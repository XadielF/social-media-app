const Tweet = require("../models/Tweet");

exports.createTweet = async (req, res) => {
  try {
    const tweet = new Tweet({
      text: req.body.text,
      author: req.user._id, // assuming req.user contains authenticated user details
    });
    await tweet.save();
    res.status(201).json(tweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTweetById = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }
    res.status(200).json(tweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTweetById = async (req, res) => {
  try {
    const tweet = await Tweet.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text,
      },
      { new: true }
    );
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }
    if (tweet.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    res.status(200).json(tweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTweetById = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }
    if (tweet.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    await tweet.remove();
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};