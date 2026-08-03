import express from 'express';
import { clerkMiddleware } from '@clerk/express';
import { useController } from '../module/user/container.js';

const router = express.Router();

router.post('/user/register', clerkMiddleware(), useController.register);

export default router;
