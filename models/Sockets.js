const mongoose = require('mongoose');
const socketIO = new mongoose.Schema({
  socket_id: String,
  connectedTime: {Type:Date, default:Date},
  createdBy: String,
  disconnectedTime: {type:Date, default:null},
})
module.exports = mongoose.model("Socket", socketIO);