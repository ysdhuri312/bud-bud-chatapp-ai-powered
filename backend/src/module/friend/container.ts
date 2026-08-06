import { FriendService } from './friend.service.js';
import { FriendController } from './friend.controller.js';
import { FriendRepostory } from './friend.repository.js';
import { userRepository } from '../user/container.js';

export const friendRepository = new FriendRepostory();
export const friendService = new FriendService(friendRepository);
export const friendController = new FriendController(
  friendService,
  userRepository,
);
