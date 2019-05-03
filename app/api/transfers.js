import Endpoint from './endpoint';

class Transfers extends Endpoint {
  constructor() {
    super('/transfers');
  }

  fetchTransfers = () => this.get('/');
  setRecipient = (form) => this.post('/recipient');
}


export default new Transfers();