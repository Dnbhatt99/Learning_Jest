import axios from 'axios';

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Brad' };
    user['lastName'] = 'Traversy';
    return user;
  },
  fetchUser: async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      return res.data;
    } catch (err) {
      return 'error';
    }
  }
};

export default functions;
