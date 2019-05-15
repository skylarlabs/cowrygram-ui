import Endpoint from './endpoint';


class CgApi extends Endpoint {
  constructor() {
    super('/money');
  }

  exchange = (data) => this.get('/exchange', data);
  getQuote = (quoteId) => this.get(`/quote/${quoteId}`);
  getFw = (quoteId) => this.get(`/fund/${quoteId}`);

  setRecipient = (quoteId, recipientId) => this.post(`/recipient/${quoteId}/${recipientId}`);
  transfer = (quoteId) => this.post(`/transfer/${quoteId}`);
  getRequirements = (data) => this.get(`/requirements`, data);
  verifyTransaction = (quoteId, data) => this.post(`/verify/transaction/${quoteId}`, data);
}


export default new CgApi();