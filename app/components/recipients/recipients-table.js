import React, { Component } from 'react';

import { Button } from '../ui/buttons';
import Message from '../ui/message';
// <td>{ recipient.email }</td>
// <th>Email</th>

class RecipientsTable extends Component {
  render() {
    const { recipients } = this.props;

    return (
      <div className="table-responsive">
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
            {
              recipients.map((recipient, index) => (
                <tr key={`recipient-${ recipient.id }`}  className="row-item border-bottom">
                  <td className="text-center">{ index + 1 }</td>
                  <td>{ recipient.name }</td>

                  <td>{ recipient.bank_account }</td>
                  <td><span className="badge badge-success py-2 px-3 font-weight-bold">NGN  { recipient.amount_sent }</span></td>
                  {/*<td><Button className="btn-outline-danger">Remove</Button></td>*/}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default RecipientsTable;