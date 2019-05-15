import { observable, action, computed, toJS } from 'mobx';
import { mapInputToStatex } from '../util';

import { money }from '../../api';
import session from '../session';


class CurrencyChoserStore {
  @observable selected;
  @observable show;

  @observable targetSelected = false;
  @observable exchange = null;

  @action onChange(e) {
    this.targetSelected = e.target.name != 'source_amount';
    mapInputToStatex(e, this.form);
    this.fetch();
  }
};


export default new CurrencyChoserStore();