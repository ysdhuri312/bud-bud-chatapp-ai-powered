import { asyncErrorHandler } from '../handlers/asyncErrorHandler.js';
import { type Request } from 'express';
import { IUser, userSchema } from '../interface/user.js';
import { AppError } from '../handlers/AppError.js';
import bcrypt from 'bcryptjs';
import { string } from 'zod';

export const register = asyncErrorHandler(
  async (req: Request<unknown, unknown, IUser>, res, next) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      next(new AppError(406, result.error.message));
    }
    const { name, email, password } = result.data as IUser;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    res.status(201).json({
      success: true,
      message: 'User create successfully',
      data: { name, email, password: hashedPassword },
    });
  },
);
