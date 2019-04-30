import { observable, action } from 'mobx';
import { mapInputToStatex } from '../util';

import { transfers } from '../../api';


class TransferStore {
  @observable isLoading = false;
  @observable error = null;
  @observable transfers = [];

  @action async fetch() {
    this.isLoading = true;
    const [data, error] = await transfers.fetchTransfers();
    this.isLoading = false;
    this.error = error ? error.message : null;
    this.transgers = error ? [] : data.transgers;
  }
}


export default new TransferStore();