const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
// Connect to MongoDB
const connection = mongoose.connect(process.env.MONGO_URL);

module.exports ={ connection }
 