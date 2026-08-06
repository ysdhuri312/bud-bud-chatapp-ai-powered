import { BadRequestError } from '../../handlers/CustomErrorHandler.js';
import type { FriendRepostory } from './friend.repository.js';
import type { UserRepository } from '../user/user.repository.js';

export class FriendService {
  constructor(
    private readonly friendRepository: FriendRepostory,
    public readonly userRepository: UserRepository,
  ) {}

  addFriend = async (userId: string, username: string) => {
    const friend = await this.userRepository.findUserByUsername(username);
    if (!friend) {
      throw new BadRequestError('Friend not found');
    }

    return this.friendRepository.add(userId, username);
  };
}
