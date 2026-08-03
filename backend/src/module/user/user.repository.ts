import UserModel from './user.model.js';
import type { IUser } from './user.schema.js';

export class UserRepository {
  async create(data: IUser) {
    return UserModel.create(data);
  }

  async findUserById(userId: string) {
    return UserModel.findOne({ clerkId: userId });
  }
}
