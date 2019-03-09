const mongoose = require('mongoose');
const user = new mongoose.Schema({
  userName: String,
  createDate: {type:Date, default:Date}
})
module.exports = mongoose.model("User", user);