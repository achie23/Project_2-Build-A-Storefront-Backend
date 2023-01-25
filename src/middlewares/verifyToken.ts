import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const tokenSecret = process.env.TOKEN_SECRET as string;

// Verify authorization token
const verifyAuthToken = (req: Request, res: Response, next: any) => {
  try {
    const authorizationHeader = req.headers['authorization'] as string;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, tokenSecret);
    next();
  } catch (error) {
    res.status(401);
    res.json(`Access denied, invalid token ${error}`);
  }
};
export default verifyAuthToken;
