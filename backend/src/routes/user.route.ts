import express from 'express';
import { validate } from '../middlewares/validation.js';
import { userSchema } from '../module/user/user.schema.js';
import { clerkMiddleware } from '@clerk/express';
import { useController } from '../module/user/container.js';

const router = express.Router();

router.post(
  '/user/register',
  clerkMiddleware(),
  validate(userSchema),
  useController.register,
);

export default router;
