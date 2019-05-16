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


const route = ({ path, component }) => ({ path, component });


const routes = [
  route('/send', QuoteContainer),
  route('/send/:quoteId/recipient', ChoseRecipientContainer),
  route('/send/:quoteId/fund', FundTransferContainer),
  route('/send/:quoteId/transfer/:status', TransferStatusContainer),
  route('/recipients', RecipientContainer),
  route('/transfers', TransfersContainer)
];


class App extends Component {
    render() {
    return (
      <Provider { ...stores }>
        <Router history={ stores.nav.history }>
          <Switch>
            <Route exact path='/login' component={ LoginContainer } />
            <Route exact path='/register' component={ RegisterContainer } />

            { routes.map(({ path, component }) =>
              <ProtectedRoute exact path={ path } component={ component } />)
            }

            </Switch>
        </Router>
      </Provider>
    )
  }
};

render(<App/>, document.querySelector('#app'));