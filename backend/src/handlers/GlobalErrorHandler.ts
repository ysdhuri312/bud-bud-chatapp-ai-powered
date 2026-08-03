import type { Response, Request, NextFunction } from 'express';
import { AppError } from './CustomErrorHandler.js';
import env from '../configs/env.js';

export function globalErrorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    console.error(
      `[REGISTER FAILURE] Code: ${err.code} | Message: ${err.message}`,
    );

    return res.status(err.statusCode).json({
      success: false,
      code: err.code,
      message: err.message,
      timestamp: new Date().toISOString(),
      details: env.NODE_ENV === 'development' ? err.stack : null,
    });
  } else {
    console.error('[UNEXPECTED ERROR]', err);
    return res.status(500).json({
      success: false,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
      timestamp: new Date().toISOString(),
    });
  }
}
