import client from '../database';

// create an object type for products
export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
};

// Product model class
export class ProductStore {
  // products index api endpoint model
  async index(): Promise<Product[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM products';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to get products: ${error}`);
    }
  }
  // show products api endpoint model
  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const connection = await client.connect();
      const result = await connection.query(sql, [id]);
      const product = result.rows[0];
      connection.release();
      console.log('Read product data:', product);
      return product;
    } catch (error) {
      throw new Error(`Cannot show product, ${id}. Error: ${error}`);
    }
  }
  // create product api endpoint model
  async create(data: Product): Promise<Product> {
    const { name, price, category } = data;
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
      const result = await connection.query(sql, [name, price, category]);
      const product = result.rows[0];
      connection.release();
      return product;
    } catch (error) {
      throw new Error(`Unable to add product, ${name}: ${error}`);
    }
  }

  // Get all products by category
  async getProductsByCategory(): Promise<{ category: string }[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM products ORDER BY category ASC';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable get products by category: ${error}`);
    }
  }
}
