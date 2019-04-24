import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';

import '../assets/scss/app.scss';

import LoginContainer from './containers/onboarding/login';
import RegisterContainer from './containers/onboarding/register';


import SendMoneyContainer from './containers/send/send-money';
import RecipientContainer from './containers/recipients';
import TransfersContainer from './containers/transfers';


class App extends Component {
    render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path='/login' component={ LoginContainer } />
            <Route exact path='/register' component={ RegisterContainer } />

            <Route exact path='/send' component={ SendMoneyContainer } />
            <Route exact path='/recipients' component={ RecipientContainer } />
            <Route exact path='/transfers' component={ TransfersContainer } />
          </Switch>
        </Router>
      </Provider>
    )
  }
};

render(<App/>, document.querySelector('#app'));