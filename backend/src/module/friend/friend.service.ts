import type { FriendRepostory } from './friend.repository.js';

export class FriendService {
  constructor(private readonly friendRepository: FriendRepostory) {}

  addFriend = (userId: string, friendId: string) => {
    return this.friendRepository.add(userId, friendId);
  };
}
