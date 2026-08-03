import UserModel from './user.model.js';
import type { IUser } from './user.schema.js';

export class UserRepository {
  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async create(data: IUser) {
    return UserModel.create(data);
  }
}
