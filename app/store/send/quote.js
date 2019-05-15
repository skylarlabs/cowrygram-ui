import { observable, action, computed, toJS } from 'mobx';
import { mapInputToStatex } from '../util';

import { money } from '../../api';


class QuoteStore {
  @observable isLoading = false;
  @observable error = null;
  @observable quote = null;

  @action async fetchQuote(quoteId) {
    this.isLoading = true;
    const [quote, error] = await money.getQuote(quoteId);
    this.isLoading = false;
    this.error = error ? error.message : null;
    this.quote = error ? null : quote;
  }
};


export default new QuoteStore();