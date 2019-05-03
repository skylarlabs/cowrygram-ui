import { createBrowserHistory }  from 'history';

class Navigation {
  history = createBrowserHistory();

  push(path) {
    this.history.push(path)
  }

  replace(path) {
    this.history.replace(path)
  }
}

export default new Navigation();