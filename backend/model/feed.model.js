const mongoose = require("mongoose");

const newsFeedSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
  source: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const NewsFeedModel = mongoose.model("saving", newsFeedSchema);

module.exports = {
  NewsFeedModel,
};
