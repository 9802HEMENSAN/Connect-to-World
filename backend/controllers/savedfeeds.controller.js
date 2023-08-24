const { NewsFeedModel } = require("../model/feed.model")

const SavedFeeds = async (req, res) => {
    try {
        
        const feeds =  new NewsFeedModel(req.body)
        console.log(feeds)
        await feeds.save();
        res.status(200).json(feeds)
    } catch (error) {
        res.status(500).json({ msg: "Error in fetching feeds", error: error })
    }
}
const GetSavedFeeds = async (req, res) => {
    try {
        console.log("getSavedFeeds", req.body.email)
        const feeds = await NewsFeedModel.find({email : req.body.email })
        res.status(200).json(feeds)
      
    } catch (error) {
        res.status(500).json({ msg: "Error in fetching feeds", error: error })
    }
}


module.exports = {
    SavedFeeds,
    GetSavedFeeds
}