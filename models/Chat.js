const mongoose = require('mongoose');
const chatSchema = mongoose.Schema({
  nickName: String,
  messag: String,
  room: String,
  created: {type:Date, default:Date}
})
module.exports = mongoose.model('Messages', chatSchema);