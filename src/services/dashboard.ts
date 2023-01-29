import client from '../database';

export class DashboardQueries {
  // Get all products that have been included in orders
  async productsInOrders(): Promise<
    { name: string; price: number; order_id: string }[]
  > {
    try {
      const connection = await client.connect();
      const sql =
        'SELECT name, price, order_id FROM products INNER JOIN order_products ON products.id = order_products.id';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`unable get products and orders: ${error}`);
    }
  }

  // Get all users that have made orders
  async usersWithOrders(): Promise<{ firstName: string; lastName: string }[]> {
    try {
      const connection = await client.connect();
      const sql =
        'SELECT firstName, lastName FROM users INNER JOIN orders ON users.id = orders.user_id';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`unable get users with orders: ${error}`);
    }
  }

  // Get five most expensive orders
  async fiveMostExpensive(): Promise<{ name: string; price: number }[]> {
    try {
      const connection = await client.connect();
      const sql =
        'SELECT name, price FROM products ORDER BY price DESC LIMIT 5';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`unable get products by price: ${error}`);
    }
  }
}
