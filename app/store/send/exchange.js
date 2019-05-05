import { observable, action, computed, toJS } from 'mobx';
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
  @observable targetCurrency = {
    icon: 'flag-usd',
    currency: 'USD',
    name: 'United States Dollar'
  };

  @action onChange(e) {
    this.targetSelected = e.target.name != 'source_amount';
    mapInputToStatex(e, this.form);
    this.fetch();
  }

  @action setCurrency = currency  => {
    this.form.target = currency.currency;
    this.targetCurrency = currency;
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

    form[amount] = form[amount].replace(',', '');

    const [exchange, error] = await money.exchange(form);
    this.isLoading = false;
    this.error = error ? error.message : null;

    if (exchange) {
      this.exchange = exchange;

      if (!this.targetSelected)
        this.form.target_amount = this.format(exchange.target_amount);
      else
        this.form.source_amount = this.format(exchange.source_amount);
    }
  }

  format = amount => {
    const formatted = Number(amount).toLocaleString();
    return formatted.indexOf('.') == -1 ? `${formatted}.00` : formatted;
  }

  @computed get link() {
    return this.exchange ? `/send/${ this.exchange.id }/recipient` : '';
  }
};


export default new ExchangeStore();