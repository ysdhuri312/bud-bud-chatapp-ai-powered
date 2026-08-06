import type { Request, Response } from 'express';
import { usenameSchema, type IUSERNAME } from './friend.schema.js';
import type { FriendService } from './friend.service.js';
import type { ServerResponce } from '../../types/index.js';
import { ZodError } from '../../handlers/CustomErrorHandler.js';

export class FriendController {
  constructor(public readonly friendService: FriendService) {}

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

    await this.friendService.addFriend(userId, username);

    return res.status(201).json({
      success: true,
      timestamp: new Date().toISOString(),
      message: `${username} added successfully in friendlist`,
    });
  };
}
