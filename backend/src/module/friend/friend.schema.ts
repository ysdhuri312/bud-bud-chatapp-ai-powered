import z from 'zod';

export const usernameSchema = z.object({
  username: z.string().min(3),
});

export type IUsername = z.infer<typeof usernameSchema>;
