import type { Request, Response } from 'express';
import { usernameSchema, type IUSERNAME } from './friend.schema.js';
import type { FriendService } from './friend.service.js';
import { ZodError } from '../../handlers/CustomErrorHandler.js';

export class FriendController {
  constructor(public readonly friendService: FriendService) {}

  allFriends = async (req: Request, res: Response) => {
    const { userId } = req.auth;

    const allFriends = await this.friendService.allFriends(userId);

    return res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      message: 'All friends fetch sucessefully',
      data: allFriends,
    });
  };

  addFriend = async (req: Request<IUSERNAME>, res: Response) => {
    const result = usernameSchema.safeParse(req.params);

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
