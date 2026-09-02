import { asyncErrorHandler } from '../handlers/asyncErrorHandler.js';
import { type Request } from 'express';
import {
  RegisterDto,
  LoginDto,
  registerSchema,
  loginSchema,
} from '../interface/user.js';
import { AppError } from '../handlers/AppError.js';
import bcrypt from 'bcryptjs';
import { generaterAccessToken } from '../services/jwt.service.js';
import { User } from '../schemas/user.schema.js';

export const register = asyncErrorHandler(
  async (req: Request<unknown, unknown, RegisterDto>, res, next) => {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      next(
        new AppError(
          406,
          result.error.issues.map((issue) => issue.message).join(', '),
        ),
      );
    }
    const { name, email, password } = result.data as RegisterDto;

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
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'strict',
        maxAge: Number(process.env.ACCESS_TOKEN_EXPIRY),
      })
      .json({
        success: true,
        message: 'User registered successfully',
        data: { name, email },
        accessToken, // TODO: Remove
      });
  },
);

export const login = asyncErrorHandler(
  async (req: Request<unknown, unknown, LoginDto>, res, next) => {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      next(
        new AppError(
          406,
          result.error.issues.map((issue) => issue.message).join(', '),
        ),
      );
    }
    const { email, password } = result.data as LoginDto;

    const user = await User.findOne({ email }).exec();

    if (!user) {
      next(new AppError(401, 'User not register'));
    }

    const userVerification = bcrypt.compare(password, String(user!.password));

    if (!userVerification) {
      next(new AppError(401, 'Email and passward mismatch'));
    }

    const accessToken = generaterAccessToken({
      userId: String(user!._id),
      email,
    });

    res
      .status(200)
      .cookie('access_token', `Bearer ${accessToken}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'strict',
        maxAge: Number(process.env.ACCESS_TOKEN_EXPIRY),
      })
      .json({
        success: true,
        message: 'User login successfully',
        data: user?.email,
      });
  },
);
