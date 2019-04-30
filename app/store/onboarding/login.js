import { observable, action } from 'mobx';
import { mapInputToStatex } from '../util';

import users from '../../api/users';
import session from '../session';


class LoginStore {
  @observable isLoading = false;
  @observable error = null;
  @observable form = {
    email: '',
    password: '',
  };

  @action onChange(e) {
    mapInputToStatex(e, this.form);
  }

  @action async login(e) {
    e.preventDefault();

    this.isLoading = true;
    const [data, error] = await users.login(this.form);
    this.isLoading = false;
    this.error = error ? error.message : null;
    session.setSession(data);
  }
}


export default new LoginStore();