import { userRepository } from '../user/container.js';
import { MessageController } from './message.controller.js';
import { MessageRepository } from './message.repositrory.js';
import { MessageService } from './message.service.js';

export const messageRepository = new MessageRepository();
export const messageService = new MessageService(
  messageRepository,
  userRepository,
);
export const messageController = new MessageController(messageService);
