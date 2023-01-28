// import dependencies
import { Request, Response } from 'express';
import { User, UserModel } from '../models/user';
import jwt from 'jsonwebtoken';

const userMethods = new UserModel();
const tokenSecret = process.env.TOKEN_SECRET as string;

// Order handler class
export class UserHandler {
  // show all users
  async index(_req: Request, res: Response) {
    try {
      const users = await userMethods.index();
      res.json(users);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
  // show a user with a specific id
  async show(_req: Request, res: Response) {
    try {
      const user = await userMethods.show(_req.params.id);
    res.status(200);
    res.json(user);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
  // create a new user
  async create(req: Request, res: Response) {
    const user: User = {
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    };
    try {
      const newUser = await userMethods.create(user);
      // eslint-disable-next-line prefer-const
      let token = jwt.sign({ user: newUser }, tokenSecret);
      res.status(200);
      res.json(token);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
}
