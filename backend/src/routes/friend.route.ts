import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { friendController } from '../module/friend/container.js';

const router = express.Router();

router.get('/', authMiddleware, friendController.allFriends);
router.get('/add-friend/:username', authMiddleware, friendController.addFriend);

export default router;
