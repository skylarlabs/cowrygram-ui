import { observable, action } from 'mobx';
import { mapInputToStatex } from '../util';

import users from '../../api/users';
import session from '../session';


class RegisterStore {
  @observable isLoading = false;
  @observable error = null;
  @observable form = {
    name: '',
    email: '',
    password: '',
  };

  @action onChange(e) {
    mapInputToStatex(e, this.form);
  }

  @action async register(e) {
    e.preventDefault();

    this.isLoading = true;
    const [data, error] = await users.register(this.form);
    this.isLoading = false;
    this.error = error ? error.message : null;
    session.setSession(data);
  }
}


export default new RegisterStore();