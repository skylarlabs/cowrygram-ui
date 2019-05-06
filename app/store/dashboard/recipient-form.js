import { observable, action, computed } from 'mobx';
import { mapInputToStatex } from '../util';

import { money } from '../../api';

class RecipientFormStore {
  @observable isLoading = false;
  @observable error = null;
  @observable form = [];
  @observable currency = 'INR';
  @observable data = {};

  @action onCurrencySelected = (e) => {
    this.currency = e.value;
    this.data = {};
  }

  @action onChange = e => {
    mapInputToStatex(e, this.data);
  }

  @action onSelected = ({ name, e }) => {
    mapInputToStatex({ target: { name, value: e.value } }, this.data);
  }

  @action async fetch() {
    this.isLoading = true;
    this.form = [];

    const [form, error] = await money.getRequirements({ currency: this.currency });
    this.isLoading = false;
    this.error = error ? error.message : null;
    this.form = error ? [] : form;
  }
}


export default new RecipientFormStore();