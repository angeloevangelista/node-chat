import path from 'path';
import http from 'http';
import express from 'express';
import socketio from 'socket.io';

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, '..', 'public')));

let messages = [];

io.on('connection', (socket) => {
  socket.emit('previousMessages', messages);

  socket.on('sendMessage', (data) => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(PORT, () =>
  console.log(`Server is listening at http://127.0.0.1:${PORT}`),
);
