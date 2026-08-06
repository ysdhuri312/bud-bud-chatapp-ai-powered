import express from 'express';
import { userController } from '../module/user/container.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', authMiddleware, userController.register);

export default router;
