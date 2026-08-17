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
    username: string,
    message: string,
  ) => {
    const receiverId = await this.userRepository.findUserByUsername(username);
    const currentUser = await this.userRepository.findUserById(clerkUserId);

    if (!currentUser || !receiverId) {
      throw new BadRequestError('users not found');
    }

    return this.messageRepository.addMessages(
      String(currentUser._id),
      String(receiverId._id),
      message,
    );
  };
}
