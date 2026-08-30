import http from 'node:http';
import express from 'express';

export const app = express();
export const server = http.createServer(app);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to API v1.0.0',
    timestamp: new Date().toISOString(),
  });
});
