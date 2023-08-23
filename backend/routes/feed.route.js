const express= require('express');

const feedRouter=express.Router();

feedRouter.get('/',  GetFeeds )

module.exports={feedRouter}
