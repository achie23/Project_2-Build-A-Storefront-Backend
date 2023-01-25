import client from '../database';

// create an object type for orders
export type Order = {
  id?: number;
  product_id: string;
  quantity: string;
  user_id: string;
  status: string;
};

// Order model class
export class OrderStore {
  // orders index api endpoint model
  async index(): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to get orders: ${error}`);
    }
  }
  // show orders api endpoint model
  async show(id: string): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE id=($1)';
      const connection = await client.connect();
      const result = await connection.query(sql, [id]);
      const order = result.rows[0];
      connection.release();
      console.log('Read order data:', order);
      return order;
    } catch (error) {
      throw new Error(`Cannot show order, ${id}. Error: ${error}`);
    }
  }
  // create order api endpoint model
  async create(data: Order): Promise<Order[]> {
    const { product_id, quantity, user_id, status } = data;
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO orders (product_id, quantity, user_id, status) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await connection.query(sql, [
        product_id,
        quantity,
        user_id,
        status,
      ]);
      const order = result.rows[0];
      connection.release();
      return [order];
    } catch (error) {
      throw new Error(`Unable to add order. ${error}`);
    }
  }
  // active/current orders api endpoint model
  async activeOrder(user_id: string): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id=($1) AND status = \'active\'';
      const result = await connection.query(sql, [user_id]);
      const order = result.rows[0];
      connection.release();
      return order;
    } catch (error) {
      throw new Error(`Cannot not get active order by user ${user_id}: ${error}`);
    }
  }
  // completed orders api endpoint model
  async completedOrder(user_id: string): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id=($1) AND status = \'completed\'';
      const result = await connection.query(sql, [user_id]);
      const order = result.rows;
      connection.release();
      return order;
    } catch (error) {
      throw new Error(`Cannot not get active order by user: ${error}`);
    }
  }
}
