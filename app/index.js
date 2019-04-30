import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';

import '../assets/scss/app.scss';

import ProtectedRoute from './components/dashboard/routes';

import LoginContainer from './containers/onboarding/login';
import RegisterContainer from './containers/onboarding/register';


import SendMoneyContainer from './containers/send';
import QuoteContainer from './containers/send/quote';

import RecipientContainer from './containers/recipients';
import TransfersContainer from './containers/transfers';

import stores from './store';

window.__APP_STATE__ = stores;

class App extends Component {
    render() {
    return (
      <Provider { ...stores }>
        <Router>
          <Switch>
            <Route exact path='/login' component={ LoginContainer } />
            <Route exact path='/register' component={ RegisterContainer } />

            <ProtectedRoute exact path='/send' component={ SendMoneyContainer } />
            <ProtectedRoute exact path='/send/quote' component={ QuoteContainer } />
            <ProtectedRoute exact path='/recipients' component={ RecipientContainer } />
            <ProtectedRoute exact path='/transfers' component={ TransfersContainer } />
          </Switch>
        </Router>
      </Provider>
    )
  }
};

render(<App/>, document.querySelector('#app'));