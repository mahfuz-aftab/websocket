var express = require('express');
var socket = require ('socket.io');
var app = express();

var server = app.listen (4000, function(){
  console.log("Server on");
})
app.use(express.static('public'));

var io = socket(server);
io.on('connection', function(socket){
  // console.log("Socket connection: ", socket.id);
  socket.on('chatData', function(data){
    console.log(data);
    io.sockets.emit('chatData', data);
  });
});
