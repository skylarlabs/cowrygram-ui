import React, { Component } from 'react';

import { Button } from '../ui/buttons';
import Message from '../ui/message';


class TransfersTable extends Component {
  render() {
    const { transfers } = this.props;
    console.log(transfers)

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th width="50">#</th>
              <th width="100">Status</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              transfers.map((transfer, index) => (
                <tr key={`transfer-${transfer.id}`}  className="row-item border-bottom">
                  <td className="text-center">{ index + 1 }</td>
                  <td><span className="badge badge-success">Transfered</span></td>
                  <td>{ transfer.recipient.name }</td>
                  <td>{ transfer.amount } { transfer.recipient.currency }</td>
                  <td>{ transfer.created_at }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TransfersTable;