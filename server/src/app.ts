import http from 'node:http';
import express from 'express';
import { errorMiddleware } from './handlers/error.handler.js';
import { AppError } from './handlers/AppError.js';
import { configDotenv } from 'dotenv';

export const app = express();
export const server = http.createServer(app);

configDotenv();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res, next) => {
  return next(new AppError(400, 'Custome error'));

  res.status(200).json({
    success: true,
    message: 'Welcome to API v1.0.0',
    timestamp: new Date().toISOString(),
  });
});

app.use(errorMiddleware);
