import type { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError.js';

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Log error details in sever-side
  console.error(`[Error] - ${error.message}`);
  console.error(error.stack);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      // Only for development
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal sever error',
    // Only for development
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};
