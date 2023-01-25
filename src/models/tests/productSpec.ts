import { ProductStore } from '../product';

const store = new ProductStore();

describe('Product Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });
  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should have a getProductsByCategory method', () => {
    expect(store.getProductsByCategory).toBeDefined();
  });

  it('should create a product with the given id', async () => {
    const result = await store.create({
      id: 1,
      name: 'Milk',
      price: 10 as unknown as string,
      category: 'Dairy',
    });
    expect(result).toEqual([{
      id: 1,
      name: 'Milk',
      price: 10 as unknown as string,
      category: 'Dairy',
    }]);
  });

  it('should show a product with the given id', async () => {
    const result = await store.show('1');
    expect(result).toEqual({
      id: 1,
      name: 'Milk',
      price: 10 as unknown as string,
      category: 'Dairy',
    });
  });
});
