import React, { Component } from 'react';


class RecipientDetail extends Component {
  render() {
    const { recipient, quote } = this.props;
    if (!recipient) return null;

    return (
      <div className="my-3 p-3 border f-shadow rounded font-weight-bold">
        <ul className="recipient-detail">
          <li className="d-flex"><strong className="text-muted">Name</strong> <span className="ml-auto">{ recipient.name }</span></li>
          <li className="d-flex"><strong className="text-muted pr-3">Email</strong> <span className="ml-auto text-truncate">{ recipient.email }</span></li>
          <li className="d-flex"><strong className="text-muted">Bank Account</strong> <span className="ml-auto">{ recipient.bank_account }</span></li>
          <li className="d-flex"><strong className="text-muted">Swift Code</strong> <span className="ml-auto">{ recipient.swift_code }</span></li>
          {
            quote &&
            <li className="d-flex align-items-center">
              <strong className="text-muted">Amount</strong>
              <span className="ml-auto badge badge-success py-2">{ quote.target } { quote.targetAmount }</span>
            </li>
          }
        </ul>
      </div>
    )
  }
}

export default RecipientDetail;