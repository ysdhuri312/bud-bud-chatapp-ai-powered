import http from 'node:http';
import express from 'express';
import { errorMiddleware } from './handlers/error.handler.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth/register.route.js';

export const app = express();
export const server = http.createServer(app);

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to API v1.0.0',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/v1/auth', authRoutes);

app.use(errorMiddleware);
