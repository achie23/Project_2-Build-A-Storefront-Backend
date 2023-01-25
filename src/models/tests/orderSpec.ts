import { OrderStore } from '../order';

const store = new OrderStore();

describe('Order Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });
  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should have an active-order method', () => {
    expect(store.activeOrder).toBeDefined();
  });
  it('should have a completed-order method', () => {
    expect(store.completedOrder).toBeDefined();
  });

  it('should create an order with the given id', async () => {
    const result = await store.create({
      id: 1,
      product_id: '1',
      quantity: 25 as unknown as string,
      user_id: '1',
      status: 'active',
    });
    expect(result).toEqual([{
      id: 1,
      product_id: '1',
      quantity: 25 as unknown as string,
      user_id: '1',
      status: 'active',
    }]);
  });

  it('should show an order with the given id', async () => {
    const result = await store.show('1');
    expect(result).toEqual({
      id: 1,
      product_id: '1',
      quantity: 25 as unknown as string,
      user_id: '1',
      status: 'active',
    });
  });

  it('should show an active order of user with the given id', async () => {
    const result = await store.activeOrder('1');
    expect(result).toEqual({
      id: 1,
      product_id: '1',
      quantity: 25 as unknown as string,
      user_id: '1',
      status: 'active',
    });
  });

  // it('should show a completed order of user with the given id', async () => {
  //   const result = await store.completedOrder('1');
  //   expect(result).toEqual([{
  //     id: 3,
  //     product_id: '2',
  //     quantity: 15 as unknown as string,
  //     user_id: '1',
  //     status: 'completed',
  //   },
  //   {
  //     id: 5,
  //     product_id: '4',
  //     quantity: 25 as unknown as string,
  //     user_id: '1',
  //     status: 'completed',
  //   }]);
  // });
});

