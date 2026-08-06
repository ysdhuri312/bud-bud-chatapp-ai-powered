import type { Request, Response } from 'express';
import { usenameSchema, type IUSERNAME } from './friend.schema.js';
import type { FriendService } from './friend.service.js';
import type { ServerResponce } from '../../types/index.js';
import {
  AppError,
  BadRequestError,
  ZodError,
} from '../../handlers/CustomErrorHandler.js';
import type { UserRepository } from '../user/user.repository.js';

export class FriendController {
  constructor(
    public readonly friendService: FriendService,
    public readonly userRepository: UserRepository,
  ) {}

  addFriend = async (
    req: Request<IUSERNAME, ServerResponce>,
    res: Response,
  ) => {
    const result = usenameSchema.safeParse(req.params);

    if (!result.success) {
      throw new ZodError('Internal Server Error', result.error);
    }

    const { userId } = req.auth;
    const { username } = result.data;

    let friendData;
    try {
      friendData = await this.userRepository.findUserByUsername(username);

      if (!friendData) {
        throw new BadRequestError('User not found');
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new AppError(500, err.message, 'INTENAL_SERVER_ERROR', err.stack);
      }
      throw new AppError(500, 'Failed to find friend data');
    }

    try {
      await this.friendService.addFriend(userId, friendData.clerkId);

      return res.status(201).json({
        success: true,
        timestamp: new Date().toISOString(),
        message: `${username} added successfully in friendlist`,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw new AppError(500, err.message);
      }
      throw new AppError(500, 'Failed to add friend');
    }
  };
}
