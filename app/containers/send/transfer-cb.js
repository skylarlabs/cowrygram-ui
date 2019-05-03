import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import Template from '../../components/dashboard/template';

class TransferStatusContainer extends Component {
  render() {
    return (
      <Template>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-lg-7 border px-5 py-4 f-shadow rounded ">
            <h5 className="font-weight-bold text-center mb-3">Money has been transfered</h5>
            <NavLink className="btn btn-primary btn-block btn-sp font-weight-bold" to="/transfers">View Transfers</NavLink>
          </div>
        </div>
      </Template>
    )
  }
}

export default TransferStatusContainer;
