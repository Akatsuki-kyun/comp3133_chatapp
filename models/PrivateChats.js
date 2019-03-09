const mongoose = require('mongoose');
const PrivateChatSchema = mongoose.Schema({
  sender: String,
  receiver: String,
  message: String,
  time: {type:Date, default:Date}
})
module.exports = mongoose.model('PrivateMessage', PrivateChatSchema);