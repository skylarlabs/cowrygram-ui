import Endpoint from './endpoint';

class Recipients extends Endpoint {
  constructor() {
    super('/recipients');
  }

  fetchRecipients = () => this.get('/');
  addRecipient = (currency, data) => this.post(`/?currency=${currency}`, data, { isJson: true });
}


export default new Recipients();