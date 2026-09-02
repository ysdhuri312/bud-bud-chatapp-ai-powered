import z from 'zod';

export const userSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(8, 'Password must be 8 character'),
});

export type IUser = z.infer<typeof userSchema>;
