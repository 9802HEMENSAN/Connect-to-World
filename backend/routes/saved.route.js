const express = require("express");
const {
  GetSavedFeeds,
  SavedFeeds,
} = require("../controllers/savedfeeds.controller");
const SavedFeedRouter = express.Router();

SavedFeedRouter.post("/savefeed", SavedFeeds);
SavedFeedRouter.post("/savefeeds", GetSavedFeeds);

module.exports = {
  SavedFeedRouter,
};
