import dotenv from 'dotenv';
import z from 'zod';

const enviroment = process.env.NODE_ENV ?? 'development';

dotenv.config({
  path: `.env.${enviroment}.local`,
});

const envSchema = z.object({
  PORT: z.coerce.number(),
  NODE_ENV: z
    .union([
      z.literal('development'),
      z.literal('test'),
      z.literal('production'),
    ])
    .default('development'),
  MONGODB_URI: z.url(),
});

const env = envSchema.parse(process.env);
export default env;
