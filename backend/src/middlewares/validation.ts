import type { ZodObject } from 'zod';
import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../handlers/CustomErrorHandler.js';

export const validate = (schema: ZodObject) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        throw new AppError(400, err.issues[0]?.message, 'ZOD_ERROR');
      } else {
        return next(err);
      }
    }
  };
};
