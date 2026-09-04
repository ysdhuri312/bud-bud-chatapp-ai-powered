import http from 'node:http';
import { Server } from 'socket.io';
import { connectDB } from './db/db.js';
import { app } from './app.js';

const PORT = process.env.PORT || 3000;

export const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});
connectDB();

io.on('connection', (socket) => {
  console.log('Socket connention established', socket.id);

  socket.on('send-message', (message: string) => {
    io.emit('received-message', message);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
