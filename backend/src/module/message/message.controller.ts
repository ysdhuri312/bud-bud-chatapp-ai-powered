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

    const { userId: clerkUserId } = req.auth;
    const { username: receiverUsername } = usernameResult.data;
    const { message } = messageResult.data;

    console.log(receiverUsername, message, clerkUserId); //TODO: log statement
    const response = await this.messageService.sendMessage(
      clerkUserId,
      receiverUsername,
      message,
    );

    await this.messageService.updateConversation(
      response.conversationId,
      response._id.toString(),
    );

    return res.json({
      success: true,
      timestamp: new Date().toISOString(),
      message: 'Message sent successfully',
      data: response,
    });
  };

  getMessages = async (req: Request, res: Response) => {
    const { conversationId } = req.params;

    const messages = await this.messageService.getMessages(
      conversationId as string,
    );

    return res.json({
      success: true,
      timestamp: new Date().toISOString(),
      message: 'Message sent successfully',
      conversations: messages,
    });
  };
}
