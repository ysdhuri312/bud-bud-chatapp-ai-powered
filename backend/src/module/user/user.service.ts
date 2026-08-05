import { clerkClient } from '@clerk/express';
import { ClerkError } from '../../handlers/CustomErrorHandler.js';
import type { UserRepository } from './user.repository.js';
import { userSchema, type IUser } from './user.schema.js';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(userId: string) {
    let user;
    try {
      user = await clerkClient.users.getUser(userId);
    } catch (err) {
      throw new ClerkError('Failed to find user', err);
    }

    const isUserExist = await this.userRepository.findUserById(userId);
    if (isUserExist) {
      return;
    }

    const sanitizeUser: IUser = userSchema.parse({
      clerkId: userId,
      userName: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emailAddresses[0]?.emailAddress,
      avatar: user.imageUrl,
    });

    return this.userRepository.create(sanitizeUser);
  }
}
