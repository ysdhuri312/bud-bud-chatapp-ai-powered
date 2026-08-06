import { FriendModel } from './friend.model.js';

export class FriendRepostory {
  add = async (userId: string, friendId: string) => {
    return FriendModel.create({ userId, friendId });
  };
}
