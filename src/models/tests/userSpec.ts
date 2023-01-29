import { UserModel } from '../user';

const user = new UserModel();

describe('User Model', () => {
  it('should have an index method', () => {
    expect(user.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(user.show).toBeDefined();
  });
  it('should have a create method', () => {
    expect(user.create).toBeDefined();
  });

  it('should create a new user', async () => {
    const result = await user.create({
      id: 1,
      firstname: 'Kayfas',
      lastname: 'Cobbie',
      password: 'kayfasc@23',
    });
    expect(typeof result).toBe(
      'object'
    );
  });

  it('should show a user with the given id', async () => {
    const result = await user.show('1');
    expect(typeof result).toBe(
      'object'
    );
  });

    it('should show all users', async () => {
      const result = await user.index();
      expect(typeof result).toBe(
        'object'
      );
    });
});
