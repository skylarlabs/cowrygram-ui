import React, { Component } from 'react';
import Template from '../../components/dashboard/template';
import { Button } from '../../components/ui/buttons';


class TransfersContainer extends Component {
  render() {
    return (
      <Template>
        <div className="p-3">Transfers</div>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-item border-bottom">
              <td>1</td>
              <td>To Amex ending with xx45</td>
              <td>NGN 122</td>
              <td>4/25-2019</td>
            </tr>
          </tbody>
        </table>

      </Template>
    )
  }
}

export default TransfersContainer;
