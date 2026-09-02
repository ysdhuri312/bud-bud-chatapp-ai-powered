import { asyncErrorHandler } from '../handlers/asyncErrorHandler.js';
import { type Request } from 'express';
import { IUser, userSchema } from '../interface/user.js';
import { AppError } from '../handlers/AppError.js';
import bcrypt from 'bcryptjs';
import { generaterAccessToken } from '../services/jwt.service.js';
import { User } from '../schemas/user.schema.js';

export const register = asyncErrorHandler(
  async (req: Request<unknown, unknown, IUser>, res, next) => {
    const result = userSchema.safeParse(req.body);

    console.log(result.error?.message);

    if (!result.success) {
      next(
        new AppError(
          406,
          result.error.issues.map((issue) => issue.message).join(', '),
        ),
      );
    }
    const { name, email, password } = result.data as IUser;

    const userExist = await User.findOne({ email }).exec();

    if (userExist) {
      next(new AppError(400, 'User already register'));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const accessToken = generaterAccessToken({
      userId: String(user._id),
      email,
    });

    res
      .status(201)
      .cookie('access_token', `Bearer ${accessToken}`, {
        maxAge: Number(process.env.ACCESS_TOKEN_EXPIRY),
      })
      .json({
        success: true,
        message: 'User create successfully',
        data: { name, email },
        accessToken, // TODO: Remove
      });
  },
);
