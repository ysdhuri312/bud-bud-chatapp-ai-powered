import { BadRequestError } from '../../handlers/CustomErrorHandler.js';
import type { FriendRepostory } from './friend.repository.js';
import type { UserRepository } from '../user/user.repository.js';

export class FriendService {
  constructor(
    public readonly friendRepository: FriendRepostory,
    public readonly userRepository: UserRepository,
  ) {}

  allFriends = async (clerkUserId: string) => {
    const currentUser = await this.userRepository.findUserById(clerkUserId);

    if (!currentUser) {
      throw new BadRequestError('Friend not found');
    }

    return this.friendRepository.findAll(currentUser._id);
  };

  addFriend = async (clerkUserId: string, friendUsername: string) => {
    const currentUser = await this.userRepository.findUserById(clerkUserId);
    const friendUser =
      await this.userRepository.findUserByUsername(friendUsername);

    if (!currentUser || !friendUser) {
      throw new BadRequestError('users not found');
    }

    return this.friendRepository.add(currentUser._id, friendUser._id);
  };
}
