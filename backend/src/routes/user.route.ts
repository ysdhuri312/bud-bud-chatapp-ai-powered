import express from 'express';
import { validate } from '../middlewares/validation.js';
import { userSchema } from '../module/user/user.schema.js';
import register from '../module/user/user.controller.js';

const router = express.Router();

router.post('user/register', validate(userSchema), register);

export default router;
