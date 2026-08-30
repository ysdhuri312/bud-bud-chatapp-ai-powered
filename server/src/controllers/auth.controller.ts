import { asyncErrorHandler } from '../handlers/asyncErrorHandler.js';

export const register = asyncErrorHandler(async (_req, res, _next) => {
  res.status(201).json({
    success: true,
    message: 'User create successfully',
    data: {
      email: 'abs@gmail.com',
    },
  });
});
