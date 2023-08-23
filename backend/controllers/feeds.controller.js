const { NewsFeedModel } = require("../model/feed.model")

const GetFeeds = async (req, res) => {
    try {
        const feeds = await NewsFeedModel.find()
        res.status(200).json(feeds)
    } catch (error) {
        res.status(500).json({ msg: "Error in fetching feeds", error: error })
    }
}

module.exports = {
    GetFeeds
}