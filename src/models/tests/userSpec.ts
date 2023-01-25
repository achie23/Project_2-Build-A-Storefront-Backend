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
    expect(result).toEqual([
      {
        id: 1,
        firstname: 'Kayfas',
        lastname: 'Cobbie',
        password: 'kayfasc@23'
        },
    ]);
  });

  it('should show a user with the given id', async () => {
    const result = await user.show('1');
    expect(result).toEqual({
      id: 1,
      firstname: 'Kayfas',
      lastname: 'Cobbie',
      password: '$2b$10$l9aaqPfNJsg1kM0uNT.Qrub5gXI4cw//Rg8iJbyFsVZ4vOBYd/6we',
    });
  });

    // it('should show all users', async () => {
    //   const result = await user.index();
    //   expect(result).toEqual([
    //       {
    //         id: 1,
    //         firstname: 'Kayfas',
    //         lastname: 'Cobbie',
    //         password:
    //           '$2b$10$l9aaqPfNJsg1kM0uNT.Qrub5gXI4cw//Rg8iJbyFsVZ4vOBYd/6we',
    //       },
    //   ]);
    // });

});
