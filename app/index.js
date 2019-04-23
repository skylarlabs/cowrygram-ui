import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';

import '../assets/scss/app.scss';

import LoginContainer from './containers/onboarding/login';
import RegisterContainer from './containers/onboarding/register';


class App extends Component {
    render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path='/login' component={ LoginContainer } />
            <Route exact path='/register' component={ RegisterContainer } />
          </Switch>
        </Router>
      </Provider>
    )
  }
};

render(<App/>, document.querySelector('#app'));