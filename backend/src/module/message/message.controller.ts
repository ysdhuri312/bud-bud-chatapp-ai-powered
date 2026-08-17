import type { Request, Response } from 'express';
import { messageRequestBodySchema } from './message.schema.js';
import { usernameSchema } from '../friend/friend.schema.js';
import type { MessageService } from './message.service.js';
import { ZodError } from '../../handlers/CustomErrorHandler.js';

export class MessageController {
  constructor(public readonly messageService: MessageService) {}

  sendMessage = async (req: Request, res: Response) => {
    const messageResult = messageRequestBodySchema.safeParse(req.body);
    const usernameResult = usernameSchema.safeParse(req.params);

    if (!usernameResult.success || !messageResult.success) {
      throw new ZodError('Internal Server Error', messageResult.error);
    }

    const { username } = usernameResult.data;
    const { message } = messageResult.data;
    const { userId } = req.auth;

    console.log(username, message, userId);
    await this.messageService.sendMessage(userId, username, message);

    return res.json({
      success: true,
      timestamp: new Date().toISOString(),
      message: 'Message sent successfully',
      data: message,
    });
  };
}
