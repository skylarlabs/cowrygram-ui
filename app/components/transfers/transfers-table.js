import React, { Component } from 'react';

import { Button } from '../ui/buttons';
import Message from '../ui/message';


class TransfersTable extends Component {
  render() {
    const { transfers } = this.props;

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th width="50">#</th>
              <th width="100">status</th>
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
                  <td>{ transfer.status }</td>
                  <td>{ transfer.recipient_str }</td>
                  <td>{ transfer.amount }</td>
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