import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  author: string;
  message: string;
}

const MessageSchema = new mongoose.Schema({
  author: String,
  message: String,
});

const Message = mongoose.model<IMessage>('messages', MessageSchema);

export default Message;
