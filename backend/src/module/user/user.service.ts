import { AppError } from '../../handlers/CustomErrorHandler.js';
import type { UserRepository } from './user.repository.js';
import type { IUser } from './user.schema.js';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(dto: IUser, clerkId: string) {
    const { firstName, lastName, email, avatar, status, about } = dto;

    const isUserExist = await this.userRepository.findByEmail(email);

    if (isUserExist) {
      return new AppError(400, 'User already exists');
    }

    return this.userRepository.create({
      clerkId,
      firstName,
      lastName,
      email,
      avatar,
      status,
      about,
    });
  }
}
