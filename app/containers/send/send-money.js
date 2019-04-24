import React, { Component } from 'react';
import Template from '../../components/dashboard/template';
import { Button } from '../../components/ui/buttons';


class SendMoneyContainer extends Component {
  render() {
    return (
      <Template>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="col-7 col-lg-5 border p-5 text-center f-shadow rounded">
            <h5 className="font-weight-bold">Send Money</h5>
            <h6 className="text-muted">Start sending money now!</h6>
            <Button className="btn-primary mt-4">Send Money</Button>
          </div>
        </div>
      </Template>
    )
  }
}

export default SendMoneyContainer;
