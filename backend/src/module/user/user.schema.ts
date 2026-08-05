import z from 'zod';

export const userSchema = z.object({
  clerkId: z.string(),
  userName: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email(),
  avatar: z.string(),
  status: z.enum(['online', 'offline']).default('offline'),
  about: z.string().optional(),
});

export type IUser = z.infer<typeof userSchema>;
