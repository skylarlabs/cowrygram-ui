import { observable, action, computed } from 'mobx';
import { ObjfromSession } from './util';


class SessionStore {
  @observable user = ObjfromSession('user', null);
  @observable token = window.sessionStorage.getItem('token') || null;

  @action setSession(data) {
    this.user = data.user;
    this.token = data.token;

    window.sessionStorage.setItem('token', this.token);
  }

  @computed get isLoggedIn() {
    return this.token != null;
  }
}

export default new SessionStore();