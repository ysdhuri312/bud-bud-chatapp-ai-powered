import z from 'zod';

export const messageSchema = z.object({
  conversationId: z.string(),
  senderId: z.string(),
  receiverId: z.string(),
  text: z.string(),
  image: z.string(),
  video: z.string(),
  groupId: z.string(),
  isEdited: z.boolean().default(false),
  readingStatus: z
    .enum(['sent', 'read', 'unread', 'deleted'])
    .default('unread'),
});

export const messageRequestBodySchema = z.object({
  message: z.string().min(1),
});

export type IMessage = z.infer<typeof messageSchema>;
