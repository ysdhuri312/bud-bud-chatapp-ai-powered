import z from 'zod';

export const friendSchema = z.object({
  userId: z.string(),
  friendId: z.string(),
});

export type IFriend = z.infer<typeof friendSchema>;
