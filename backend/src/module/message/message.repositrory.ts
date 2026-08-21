import { AppError } from '../../handlers/CustomErrorHandler.js';
import { ConversationModel, MessageModel } from './message.model.js';

export class MessageRepository {
  addMessages = async (
    currentUser: string,
    receiverId: string,
    conversationId: string,
    message: string,
  ) => {
    try {
      return MessageModel.create({
        senderId: currentUser,
        receiverId,
        conversationId,
        text: message,
      });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to send messages',
        'INTENAL_SERVER_ERROR',
        { operation: 'ADD_MESSAGE', message, originalError: err },
      );
    }
  };

  getAllMessages = async (conversationId: string) => {
    try {
      return MessageModel.find({
        conversationId,
      }).sort({ createdAt: 1 });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to get all messages',
        'INTENAL_SERVER_ERROR',
        { operation: 'GET_ALL_MESSAGES', conversationId, originalError: err },
      );
    }
  };

  findConversation = async (senderId: string, receiverId: string) => {
    try {
      return ConversationModel.findOne({
        participant: {
          $all: [senderId, receiverId],
        },
      });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to get all messages',
        'INTENAL_SERVER_ERROR',
        { operation: 'FIND_CONVERSATION', senderId, originalError: err },
      );
    }
  };

  createConversation = async (
    senderId: string,
    receiverId: string,
    messageId?: string,
  ) => {
    try {
      return ConversationModel.create({
        participant: [senderId, receiverId],
        lastMessage: messageId,
      });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to create conversation',
        'INTENAL_SERVER_ERROR',
        { operation: 'CREATE_CONVERSATION', senderId, originalError: err },
      );
    }
  };

  updateConversation = async (conversationId: string, messageId?: string) => {
    try {
      return ConversationModel.findByIdAndUpdate(conversationId, {
        lastMessage: messageId,
      });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to upadate conversation',
        'INTENAL_SERVER_ERROR',
        {
          operation: 'UPDATE_CONVERSATION',
          conversationId,
          originalError: err,
        },
      );
    }
  };
}
