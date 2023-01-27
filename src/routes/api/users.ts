import express from 'express';
import { UserHandler } from '../../handlers/userHandler';
import verifyAuthToken from '../../middlewares/verifyToken';

const users = express.Router();
const userMethods = new UserHandler();

users.get('/index', verifyAuthToken, userMethods.index);
users.get('/show-users/:id', verifyAuthToken, userMethods.show);
users.post('/create-users', userMethods.create);

export default users;
