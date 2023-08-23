const mongoose = require('mongoose');
 

// Connect to MongoDB
const connection = mongoose.connect('mongodb+srv://hmahilange:mahilange@cluster0.m6psgpm.mongodb.net/newsapp?retryWrites=true&w=majority');

module.exports ={ connection }
 