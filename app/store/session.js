import { observable, action, computed } from 'mobx';
import { ObjfromSession } from './util';

import nav from './nav';


class SessionStore {
  @observable user = ObjfromSession('user', null);
  @observable token = window.sessionStorage.getItem('token') || null;

  @action setSession(data) {
    this.user = data.user;
    this.token = data.token;

    window.sessionStorage.setItem('token', this.token);
    window.sessionStorage.setItem('user', JSON.stringify(data.user));
  }

  @action logout(){
    window.sessionStorage.clear();

    this.token = null;
    this.user = null;

    nav.replace('/login');
  }

  @computed get isLoggedIn() {
    return this.token != null;
  }
}

export default new SessionStore();