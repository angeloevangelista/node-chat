import socketIo from 'socket.io';
import { Server as HttpServer } from 'http';

import Message, { IMessage } from '../models/Message';

const sockets = (server: HttpServer) => {
  let messages: IMessage[] = [];

  const io = socketIo(server);

  io.on('connection', async (socket) => {
    messages = await Message.find();

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', async (message: IMessage) => {
      await Message.create(message);

      messages.push(message);

      socket.broadcast.emit('receivedMessage', message);
    });
  });
};

export default sockets;
