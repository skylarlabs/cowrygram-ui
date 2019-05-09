import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { NavLink, Redirect } from 'react-router-dom';
import { Input } from '../../components/ui/inputs';
import { ActionButton } from '../../components/ui/buttons';
import Message from '../../components/ui/message';
import Template from '../../components/onboarding/template';


@inject('LoginStore', 'SessionStore')
@observer
class LoginContainer extends Component {
  store = () => this.props.LoginStore;
  session = () => this.props.SessionStore;

  onChange = (e) => this.store().onChange(e);
  onSubmit = (e) => this.store().login(e);

  render() {
    const { isLoading, error } = this.store();

    if (this.session().isLoggedIn) {
      return <Redirect to='/send' />
    }

    return (
      <Template>
        <div className="text-center">
          <h4 className="font-weight-bold">Welcome Back</h4>
          <h6>Sign In to your Account</h6>
        </div>
        <form className="onboarding-form mx-auto mt-5" onSubmit={ this.onSubmit }>
          { error && <Message className="mb-3">{ error }</Message> }

          <Input className="form-control mb-3 p-4" type="email" name="email" onChange={ this.onChange } placeholder="Your email address" required />
          <Input className="form-control mb-3 p-4" type="password" name="password" onChange={ this.onChange } placeholder="Your password" required />

          <NavLink to="/register" className="float-right mb-3 font-weight-bold">Don't have an account ? Register here.</NavLink>

          <ActionButton className="btn-success btn-sp btn-block font-weight-bold" type="submit" loading={ isLoading }>Sign In</ActionButton>
        </form>
      </Template>
    )
  }
};


export default LoginContainer;
