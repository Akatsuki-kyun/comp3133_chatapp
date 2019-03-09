const express = require('express'),
  router = express.Router(),
  eventLog = require('../models/Events.js');
  Chat = require('../models/Chat.js');

router.get('/api/eventlog', function(req, res, next) {
  Elog.find((err, results)=>{
      if(err) throw err;
      res.header("Content-Type",'application/json');
      res.send(JSON.stringify(results, null, 4));
  });
});

router.get('/', function (req, res) {
  res.render('index', {title: 'Express' });
  res.sendFile(__dirname + '/assets/index.html');
})

router.get("/api/history", (req, res) => {
  Chat.find({}, (err, results) => {
    if(err) throw err;
    res.header("Content-Type", 'application/json');
  });
});

router.get("/api/main", (req, res) => {
  Chat.find({room: "Main room"}, (err, results) => {
    if(err) throw err;
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(results, null, 4));
  });
});

router.get("/api/game", (req, res) => {
  Chat.find({room: "Gaming room"}, (err, results) => {
    if(err) throw err;
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(results, null, 4));
  });
});

router.get("/api/political", (req, res) => {
  Chat.find({room: "Political room"}, (req, res) => {
    if(err) throw err;
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(results, null, 4));
  });
});

/*Template for Chat Room
router.get("/api/<nameOfChatRoomHere>", (req, res) => {
  Chat.find({room: "nameOfRoomHere"} , (req, res) => {
    if(err) throw err;
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(results, null, 4));
  });
});*/