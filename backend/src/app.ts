import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './handlers/GlobalErrorHandler.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import friendRoutes from './routes/friend.route.js';
import { clerkMiddleware } from '@clerk/express';

export const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(clerkMiddleware());

app.get('/api/v1', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to API v1.0.0',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/friend', friendRoutes);

app.use(globalErrorHandler);
