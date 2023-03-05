const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

//User Data CRUD
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

//Tweet Data CRUD
router.post("/tweets", tweetController.createTweet);
router.get("/tweets", tweetController.getAllTweets);
router.get("/tweets/:id", tweetController.getTweetById);
router.put("/tweets/:id", tweetController.updateTweetById);
router.delete("/tweets/:id", tweetController.deleteTweetById);

//Module export
module.exports = router;
