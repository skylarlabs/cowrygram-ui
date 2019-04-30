import Endpoint from './endpoint';

class Transfers extends Endpoint {
  constructor() {
    super('/transfers');
  }

  fetchTransfers = () => this.get('/');
}


export default new Transfers();