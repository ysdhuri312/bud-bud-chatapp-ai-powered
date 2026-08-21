import { BadRequestError } from '../../handlers/CustomErrorHandler.js';
import type { UserRepository } from '../user/user.repository.js';
import type { MessageRepository } from './message.repositrory.js';

export class MessageService {
  constructor(
    public readonly messageRepository: MessageRepository,
    public readonly userRepository: UserRepository,
  ) {}

  sendMessage = async (
    clerkUserId: string,
    receiverUsername: string,
    message: string,
  ) => {
    const receiverUser =
      await this.userRepository.findUserByUsername(receiverUsername);
    const currentUser = await this.userRepository.findUserById(clerkUserId);

    const senderId = currentUser?._id.toString();
    const receiverId = receiverUser?._id.toString();

    if (!senderId || !receiverId) {
      throw new BadRequestError('users not found');
    }

    let conversation;
    conversation = await this.messageRepository.findConversation(
      senderId,
      receiverId,
    );

    if (!conversation) {
      conversation = await this.messageRepository.createConversation(
        senderId,
        receiverId,
      );
    } else {
      await this.messageRepository.updateConversation(
        conversation._id.toString(),
      );
    }

    return this.messageRepository.addMessages(
      senderId,
      receiverId,
      conversation?._id.toString(),
      message,
    );
  };

  getMessages = async (consversationId: string) => {
    return this.messageRepository.getAllMessages(consversationId);
  };

  // Conversation Module

  findConversation = async (senderId: string, receiverId: string) => {
    return await this.messageRepository.findConversation(senderId, receiverId);
  };

  createConversation = async (
    senderId: string,
    receiverId: string,
    messageId: string,
  ) => {
    await this.messageRepository.createConversation(
      senderId,
      receiverId,
      messageId,
    );
  };

  updateConversation = async (conversationId: string, messageId: string) => {
    await this.messageRepository.updateConversation(conversationId, messageId);
  };
}
