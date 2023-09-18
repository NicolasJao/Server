const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("message", (data) => {
    var incomingmessage = {
      "message": data["message"]
    };
    io.emit("message"), incomingmessage;
  })
});

server.listen(64999, () => {
  console.log('listening on *:64999');
});
