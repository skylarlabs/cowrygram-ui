import React, { Component } from 'react';
import Template from '../../components/dashboard/template';
import { Button } from '../../components/ui/buttons';


class RecipientContainer extends Component {
  render() {
    return (
      <Template>
        <div className="px-3 py-2 d-flex align-items-center">Recipients
          <Button className="btn-primary ml-auto">Add Recipient</Button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th width="50">#</th>
              <th>Name</th>
              <th>Bank Account</th>
              <th>Amount Sent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-item border-bottom">
              <td className="text-center">1</td>
              <td>Tomiwa Abdul Hassan</td>
              <td>HDFC Bank ending with <span className="badge badge-secondary">3333</span></td>
              <td><span className="badge badge-success py-2 px-3">NGN  500</span></td>
            </tr>
          </tbody>
        </table>
      </Template>
    )
  }
}

export default RecipientContainer;
