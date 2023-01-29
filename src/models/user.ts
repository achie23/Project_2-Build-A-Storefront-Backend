import client from '../database';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS as unknown as string;

// create an object type for users
export type User = {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
};

// User model class
export class UserModel {
  // users index api endpoint model
  async index(): Promise<User[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM users';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get users. Error: ${error}`);
    }
  }
  // show users api endpoint model
  async show(id: string): Promise<User> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM users WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      const user = result.rows[0];
      connection.release();
      return user;
    } catch (error) {
      throw new Error(`Cannot show user. Error: ${error}`);
    }
  }
  // create user api endpoint model
  async create(user: User): Promise<User> {
    const { firstname, lastname, password } = user;
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *';
      const hash = bcrypt.hashSync(password + pepper, parseInt(saltRounds));
      const result = await connection.query(sql, [firstname, lastname, hash]);
      const user = result.rows[0];
      connection.release();
      return user;
    } catch (error) {
      throw new Error(`Cannot add user. Error: ${error}`);
    }
  }
}
