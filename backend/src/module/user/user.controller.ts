import type { Request, Response } from 'express';
import type { IUser } from './user.schema.js';
import type { ServerResponce } from '../../types/index.js';
import type { UserService } from './user.service.js';
import { getAuth } from '@clerk/express';
import { AppError } from '../../handlers/CustomErrorHandler.js';

export class UserController {
  constructor(private readonly userService: UserService) {}

  register = async (
    req: Request<never, ServerResponce, IUser>,
    res: Response,
  ) => {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated) {
      throw new AppError(401, 'User not authenticated', 'AUTHENTICATION_FAILD');
    }

    const user = await this.userService.register(userId);

    return res
      .status(201)
      .json({ success: true, timestamp: new Date().toISOString(), data: user });
  };
}
