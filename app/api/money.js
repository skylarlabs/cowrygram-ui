import Endpoint from './endpoint';

class Money extends Endpoint {
  constructor() {
    super('/money');
  }

  exchange = (data) => this.get('/exchange', data);
}


export default new Money();