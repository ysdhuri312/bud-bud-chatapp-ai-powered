import UserModel from './user.model.js';
import type { UserDto } from './user.schema.js';

export class UserRepository {
  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async create(data: UserDto) {
    return UserModel.create(data);
  }
}
