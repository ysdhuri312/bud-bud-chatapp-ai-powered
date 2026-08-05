import mongoose, { Document, model } from 'mongoose';
import type { IFriend } from './friend.schema.js';
interface IFriendDocument extends IFriend, Document {}

const friendSchema = new mongoose.Schema<IFriendDocument>({
  userId: String,
  friendId: String,
});

export const FriendModel =
  (mongoose.models.Friend as mongoose.Model<IFriendDocument>) ||
  model<IFriendDocument>('Friend', friendSchema);
