import jwt from 'jsonwebtoken';
import { JwtPayload } from '../interface/jwtPayload.js';

export const generaterAccessToken = (payload: JwtPayload): string => {
  const accessSecret = process.env.JWT_ACCESS_SECRET as string;
  return jwt.sign(payload, accessSecret);
};

export const verifyAccessToken = (token: string): JwtPayload => {
  const accessSecret = process.env.JWT_ACCESS_SECRET as string;
  return jwt.verify(token, accessSecret) as JwtPayload;
};
