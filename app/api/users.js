import Endpoint from './endpoint';

class Users extends Endpoint {
  constructor() {
    super('/users');
  }

  login = (data) => this.post('/login', data);
  register = (data) => this.post('/register', data);
}


export default new Users();