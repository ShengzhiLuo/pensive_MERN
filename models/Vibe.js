const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VibeSchema = new Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     require: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;