import socketIo from 'socket.io';
import { Server as HttpServer } from 'http';

interface IMessage {
  author: string;
  message: string;
}

let messages: IMessage[] = [];

const sockets = (server: HttpServer) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    socket.emit('previousMessages', messages);

    socket.on('sendMessage', (data) => {
      messages.push(data);
      socket.broadcast.emit('receivedMessage', data);
    });
  });
};

export default sockets;
