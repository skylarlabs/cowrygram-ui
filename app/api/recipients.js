import Endpoint from './endpoint';

class Recipients extends Endpoint {
  constructor() {
    super('/recipients');
  }

  fetchRecipients = () => this.get('/');
  addRecipient = (data) => this.post('/', data);
}


export default new Recipients();