import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Template from '../../components/onboarding/template';

import { Input } from '../../components/ui/inputs';
import { Button } from '../../components/ui/buttons';


class RegisterContainer extends Component {
  render() {
    return (
      <Template>
        <div className="w-100">
          <h4 className="font-weight-bold text-center">Welcome to Caurigram.</h4>
          <form className="onboarding-form mx-auto mt-5">

            <Input className="form-control mb-3 p-4" type="email" placeholder="Your email address" />
            <Input className="form-control mb-3 p-4" type="password" placeholder="Secret Password" />

            <NavLink to="/login" className="float-right mb-3 font-weight-bold">Already have an account ? Login here.</NavLink>

            <Button className="btn-block btn-success btn-sp font-weight-bold" type="submit">Register</Button>
          </form>
        </div>
      </Template>
    )
  }
};


export default RegisterContainer;
