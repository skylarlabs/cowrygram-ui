import React, { Component } from 'react';
import LogoLight from '../../../assets/img/logo-light.png';

class Template extends Component {
  render() {
    return (
      <main className="h-100">
        <div className="container-fluid d-flex h-100 hero--onboarding">
          <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto">
            <img className="logo--onboarding d-block mx-auto my-4" src={ LogoLight }></img>
            <div className="bg-white rounded p-5 border">
              { this.props.children }
            </div>
          </div>
        </div>
      </main>
    )
  }
};


export default Template;