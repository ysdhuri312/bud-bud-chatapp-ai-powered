import { getAuth } from '@clerk/express';
import type { Request, Response, NextFunction } from 'express';
import type { IUSERNAME } from '../module/friend/friend.schema.js';
import { AppError } from '../handlers/CustomErrorHandler.js';

export default function authMiddleware(
  req: Request<IUSERNAME>,
  _res: Response,
  next: NextFunction,
) {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated) {
    throw new AppError(401, 'User not authenticated', 'AUTHENTICATION_FAILD');
  }

  req.auth.userId = userId;
  return next();
}
