import { observable, action, toJS } from 'mobx';
import { mapInputToStatex } from '../util';

import money from '../../api/money';
import session from '../session';


class ExchangeStore {
  @observable isLoading = false;

  @observable form = {
    target_amount: '',
    source_amount: '',
    target: 'USD',
  };

  @observable targetSelected = false;

  @observable exchange = null;

  @action onChange(e) {
    this.targetSelected = e.target.name != 'source_amount';
    mapInputToStatex(e, this.form);
    this.fetch();
  }

  @action async fetch() {
    this.isLoading = true;
    let form = toJS(this.form);

    const amount = this.targetSelected ?  'target_amount': 'source_amount';

    if (!form[amount]) return;

    if (form[amount].match(/[a-z]/i)) return;

    const popkey = this.targetSelected ? 'source_amount' : 'target_amount';
    delete form[popkey];

    const [exchange, error] = await money.exchange(form);
    this.isLoading = false;
    this.error = error ? error.message : null;

    if (exchange) {
      this.exchange = exchange;

      if (exchange.source_amount) {
        this.form.source_amount = exchange.source_amount;
      } else {
        this.form.target_amount = exchange.target_amount;
      }
    }
  }
}


export default new ExchangeStore();