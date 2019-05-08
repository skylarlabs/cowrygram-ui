import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';

import '../assets/scss/app.scss';

import ProtectedRoute from './components/dashboard/routes';

import LoginContainer from './containers/onboarding/login';
import RegisterContainer from './containers/onboarding/register';


import SendMoneyContainer from './containers/send';
import QuoteContainer from './containers/send/quote';

import RecipientContainer from './containers/recipients';
import TransfersContainer from './containers/transfers';
import FundTransferContainer from './containers/send/fund-transfer';
import ChoseRecipientContainer from './containers/send/chose-recipient';
import TransferStatusContainer from './containers/send/transfer-cb';

import stores from './store';

window.__APP_STATE__ = stores;

class App extends Component {
    render() {
    return (
      <Provider { ...stores }>
        <Router history={ stores.nav.history }>
          <Switch>
            <Route exact path='/login' component={ LoginContainer } />
            <Route exact path='/register' component={ RegisterContainer } />

            <ProtectedRoute exact path='/send' component={ QuoteContainer } />
            <ProtectedRoute exact path='/send/:quoteId/recipient' component={ ChoseRecipientContainer } />
            <ProtectedRoute exact path='/send/:quoteId/fund' component={ FundTransferContainer } />
            <ProtectedRoute exact path='/send/:quoteId/transfer/success' component={ TransferStatusContainer } />

            <ProtectedRoute exact path='/recipients' component={ RecipientContainer } />
            <ProtectedRoute exact path='/transfers' component={ TransfersContainer } />
          </Switch>
        </Router>
      </Provider>
    )
  }
};

render(<App/>, document.querySelector('#app'));