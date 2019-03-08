const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
const Message = mongoose.model('Message',{
  name : String,
  message : String
})
const dbUrl = 'mongodb://admin:password1@ds163255.mlab.com:63255/chat-app-comp3133'
app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

//Gets all the messages from the DB
app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

//Posts new messages created by user to the DB
app.post('/messages', (req, res) => {
  const message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})
io.on('connection', () =>{
  console.log('a user is connected')
})
mongoose.connect(dbUrl ,{useNewUrlParser: true} ,(err) => {
  console.log('mongodb connected',err);
})
var server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*const express = require('express');
const app = express();

//listens to port
const server = app.listen(3000, () => {
  console.log('Server is running on port', server.address ().port);
});

app.use(express.static(__dirname));

//Mongoose
const mongoose = require('mongoose');
//'mongodb://username:password@ds257981.mlab.com:57981/simple-chat'
//const dbUrl = 'mongodb://admin:password1@ds163255.mlab.com:63255/chat-app-comp3133'

/*mongoose.connect(dbUrl, (err) => {
  console.log('mongodb connected', err);
})//

mongoose.connect('mongodb://admin:password1@ds163255.mlab.com:63255/chat-app-comp3133', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
  });
//Message Model
const Message = mongoose.model('Message', { name : String, message : String})

//Body-parser extracts entire body portion of an incoming request stream and exposes it on req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



//Routing
app.get('/message', (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  })
})
app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

const http = require('http').Server(app);
const io = require('socket.io')(http);

//create connection
io.on('connection', () => {
  console.log('a user is connected')
})
*/