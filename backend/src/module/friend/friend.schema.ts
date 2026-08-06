import z from 'zod';

export const friendSchema = z.object({
  userId: z.string(),
  friendId: z.string(),
});

export const usenameSchema = z.object({
  username: z.string().min(3),
});

export type IFriend = z.infer<typeof friendSchema>;
export type IUSERNAME = z.infer<typeof usenameSchema>;
