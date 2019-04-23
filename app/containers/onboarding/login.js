import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Template from '../../components/onboarding/template';

import { Input } from '../../components/ui/inputs';
import { Button } from '../../components/ui/buttons';


class LoginContainer extends Component {
  render() {
    return (
      <Template>
        <div className="w-100">
          <h4 className="font-weight-bold text-center">Welcome Back!</h4>
          <form className="onboarding-form mx-auto mt-5">
            <Input className="form-control mb-3 p-4" type="email" placeholder="Your email address" />
            <Input className="form-control mb-3 p-4" type="password" placeholder="Your password" />

            <NavLink to="/register" className="float-right mb-3 font-weight-bold">Don't have an account ? Register here.</NavLink>

            <Button className="btn-primary btn-block font-weight-bold" type="submit">Log In</Button>
          </form>
        </div>
      </Template>
    )
  }
};


export default LoginContainer;
