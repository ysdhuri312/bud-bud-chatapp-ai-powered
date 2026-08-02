import type { Request, Response } from 'express';
import type { IUser } from './user.schema.js';
import type { ServerResponce } from '../../types/index.js';
import type { UserService } from './user.service.js';

export class UserController {
  constructor(private readonly userService: UserService) {}
  register = async (
    req: Request<never, ServerResponce, IUser>,
    res: Response,
  ) => {
    const clerkId = req.auth.userId;
    const user = await this.userService.register(req.body, clerkId);

    return res
      .status(201)
      .json({ success: true, timestamp: new Date().toISOString(), data: user });
  };
}
