import mongoose, { Document, model } from 'mongoose';
import type { IMessage } from './message.schema.js';
interface IMessageDocument extends IMessage, Document {}

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    text: String,
    image: String,
    video: String,
    groupId: String,
    isEdited: {
      type: Boolean,
      default: false,
    },
    readingStatus: {
      type: String,
      enum: ['sent', 'read', 'unread', 'deleted'],
      default: 'unread',
    },
  },
  { timestamps: true },
);

const MessageModel =
  (mongoose.models.Message as mongoose.Model<IMessageDocument>) ||
  model<IMessageDocument>('Message', messageSchema);

export default MessageModel;
