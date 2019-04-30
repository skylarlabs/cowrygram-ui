import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { NavLink, Redirect } from 'react-router-dom';
import { Input } from '../../components/ui/inputs';
import { ActionButton } from '../../components/ui/buttons';
import Template from '../../components/onboarding/template';
import Message from '../../components/ui/message';


@inject('RegisterStore', 'SessionStore')
@observer
class RegisterContainer extends Component {
  store = () => this.props.RegisterStore;
  session = () => this.props.SessionStore;

  onChange = (e) => this.store().onChange(e);
  onSubmit = (e) => this.store().register(e);

  render() {
    const { isLoading, error } = this.store();

    if (this.session().isLoggedIn) {
      return <Redirect to='/send' />
    }

    return (
      <Template>
        <div className="w-100">
          <h4 className="font-weight-bold text-center">Welcome to Caurigram.</h4>
          <form className="onboarding-form mx-auto mt-5" onSubmit={ this.onSubmit }>
            { error && <Message className="mb-3">{ error }</Message> }

            <Input className="form-control mb-3 p-4" name="name" placeholder="Your Full Name" onChange={ this.onChange } />
            <Input className="form-control mb-3 p-4" type="email" name="email"  placeholder="Your email address" onChange={ this.onChange } />
            <Input className="form-control mb-3 p-4" type="password" name="password" placeholder="Secret Password" onChange={ this.onChange } />

            <NavLink to="/login" className="float-right mb-3 font-weight-bold">Already have an account ? Login here.</NavLink>
            <ActionButton className="btn-primary btn-sp btn-block font-weight-bold" type="submit" loading={ isLoading }>Register</ActionButton>
          </form>
        </div>
      </Template>
    )
  }
};


export default RegisterContainer;
