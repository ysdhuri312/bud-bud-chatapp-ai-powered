import type { Types } from 'mongoose';
import { AppError } from '../../handlers/CustomErrorHandler.js';
import { FriendModel } from './friend.model.js';

export class FriendRepostory {
  add = async (userId: Types.ObjectId, friendId: Types.ObjectId) => {
    try {
      return FriendModel.create({ userId, friendId });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to create friend',
        'INTENAL_SERVER_ERROR',
        { operation: 'ADD_FRIEND', userId, originalError: err },
      );
    }
  };

  findAll = (userId: Types.ObjectId) => {
    try {
      return FriendModel.find({ userId }).populate('friendId');
    } catch (err) {
      throw new AppError(
        500,
        'Failed to create friend',
        'INTENAL_SERVER_ERROR',
        { operation: 'ADD_FRIEND', userId, originalError: err },
      );
    }
  };
}
