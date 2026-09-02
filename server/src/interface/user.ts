import z from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.email(),
  password: z.string().min(8, 'Password must be 8 character'),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password is required'),
});

export type RegisterDto = z.infer<typeof registerSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
