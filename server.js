const express = require('express')
const socket = require('socket.io')

const app = express()
app.use(express.static('public'))

const server = app.listen(3000)

let io = socket(server) 
io.sockets.on('connect', newConnection);

function newConnection(socket) {
  console.log('new connection');
  console.log(socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data); // or io.sockets.emit('mouse', data);
    console.log(data);
  }
}

