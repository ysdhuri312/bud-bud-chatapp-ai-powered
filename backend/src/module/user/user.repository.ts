import { AppError } from '../../handlers/CustomErrorHandler.js';
import UserModel from './user.model.js';
import type { IUser } from './user.schema.js';

export class UserRepository {
  async findUserById(userId: string) {
    try {
      return UserModel.findOne({ clerkId: userId });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to find user by id',
        'INTENAL_SERVER_ERROR',
        {
          operation: 'FETCH_USER_ID',
          userId,
          originalError: err,
        },
      );
    }
  }

  async findUserByUsername(username: string) {
    try {
      return UserModel.findOne({ userName: username });
    } catch (err) {
      throw new AppError(
        500,
        'Failed to find user by username',
        'INTENAL_SERVER_ERROR',
        {
          operation: 'FETCH_FRIEND_BY_USERNAME',
          username,
          originalError: err,
        },
      );
    }
  }

  async create(data: IUser) {
    try {
      return UserModel.create(data);
    } catch (err) {
      throw new AppError(500, 'Failed to create user', 'INTENAL_SERVER_ERROR', {
        operation: 'CREATE_USER',
        originalError: err,
      });
    }
  }
}
