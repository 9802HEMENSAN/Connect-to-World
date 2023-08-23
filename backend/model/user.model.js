const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
  sub : {
    type: String
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
});

const UserModel = mongoose.model('user', userSchema);

module.exports ={ UserModel}
