const createUserPayload = {
  first_name: 'Teste',
  last_name: 'Teste',
  email: 'teste@teste.com',
  password: '123',
};

const newUser = {
  id: 'abcde',
  first_name: 'Teste',
  last_name: 'Teste',
  password: '123',
  email: 'teste@teste.com',
  createdAt: new Date('2022-06-06T17:54:48.249Z'),
  updatedAt: new Date('2022-06-06T17:54:48.249Z'),
};

const allUsers = [
  {
    id: 'abcde',
    first_name: 'Teste',
    last_name: 'Teste',
    password: '123',
    email: 'teste@teste.com',
    createdAt: new Date('2022-06-06T17:54:48.249Z'),
    updatedAt: new Date('2022-06-06T17:54:48.249Z'),
  },
  {
    id: 'fghij',
    first_name: 'Teste',
    last_name: 'Teste',
    password: '123',
    email: 'teste2@teste.com',
    createdAt: new Date('2022-06-06T17:54:48.249Z'),
    updatedAt: new Date('2022-06-06T17:54:48.249Z'),
  },
];

const updatedUser = {
  id: 'abcde',
  first_name: 'Teste',
  last_name: 'Teste',
  password: '123',
  email: 'oi@teste.com',
  createdAt: new Date('2022-06-06T17:54:48.249Z'),
  updatedAt: new Date('2022-06-06T17:54:48.249Z'),
};

const updateUserPayload = { email: 'oi@teste.com' };

export { createUserPayload, newUser, allUsers, updatedUser, updateUserPayload };
