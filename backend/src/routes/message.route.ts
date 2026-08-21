import express from 'express';
import { messageController } from '../module/message/container.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/send/:username', authMiddleware, messageController.sendMessage);
router.get(
  '/conversations/:conversationId',
  authMiddleware,
  messageController.getMessages,
);

export default router;
