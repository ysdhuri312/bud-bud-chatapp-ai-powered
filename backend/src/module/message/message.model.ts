import mongoose, { Document, model, Schema, Types } from 'mongoose';
import type { IMessage } from './message.schema.js';
interface IMessageDocument extends IMessage, Document {}

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: Types.ObjectId,
      ref: 'Conversation',
      required: true,
    },
    senderId: {
      type: Types.ObjectId,
      ref: 'User',
      require: true,
    },
    receiverId: {
      type: Types.ObjectId,
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

const conversationSchema = new Schema(
  {
    participant: [
      {
        type: Types.ObjectId,
        ref: 'User',
        require: true,
      },
    ],
    lastMessage: {
      type: Types.ObjectId,
      ref: 'Message',
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const MessageModel =
  (mongoose.models.Message as mongoose.Model<IMessageDocument>) ||
  model<IMessageDocument>('Message', messageSchema);

const ConversationModel = model('Conversation', conversationSchema);

export { MessageModel, ConversationModel };
