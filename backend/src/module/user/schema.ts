import z from 'zod';

export const user = z.object({
  firstName: z.string,
  lastName: z.string,
  email: z.email,
  avatar: z.string,
  status: z.enum(['online', 'offline']).default('offline'),
  about: z.string,
});
