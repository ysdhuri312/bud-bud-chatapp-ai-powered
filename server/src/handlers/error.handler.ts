import type { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError.js';
import mongoose from 'mongoose';

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Log error details in sever-side
  console.error(error.stack);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      // Only for development
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    });
  }

  if (error instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      success: false,
      message: Object.values(error.errors)
        .map((error) => error.message)
        .join(', '),
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    // Only for development
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};
