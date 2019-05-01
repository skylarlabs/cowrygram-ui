import Endpoint from './endpoint';

class Money extends Endpoint {
  constructor() {
    super('/money');
  }

  exchange = (data) => this.get('/exchange', data);
  getQuote = (quoteId) => this.get(`/quote/${quoteId}`);
}


export default new Money();