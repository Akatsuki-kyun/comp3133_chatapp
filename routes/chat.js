const express = require('express');
const router = express.Router();
var Chat = require('../model/Chat.js');

//Get all messages
router.get('/api/history', function(req, res, next) {
  Chat.find((err, result) => {
    if(err) throw err;
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(results, null, 4));
  });
});

//Save messages
router.post('/api/history', function(req, res, next) {
  Chat.create(req.body, function (err, chat) {
    if(err) return next(err);
    res.json(chat);
  });
});

module.exports = router;