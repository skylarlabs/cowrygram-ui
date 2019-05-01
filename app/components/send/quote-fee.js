import React, { Component } from 'react';


class QuoteFees extends Component {
  render() {
    const { exchange } = this.props;

    return (
      <ul className="quote-fees">
        <li>
          <span className="fee-text-l">{ exchange.fee } NGN</span>
          <span className="badge badge-secondary p-2">Low Transfer Fee</span>
        </li>
        <li>
          <span className="fee-text-l text-muted pr-2">
            { exchange.source_amount || exchange.target_amount }
            <span className="font-weight-bold">{ exchange.target }</span>
          </span>
          <span className="text-muted font-weight-bold">Amount we'll convert</span>
        </li>
        <li>
          <span className="fee-text-l text-muted">{ exchange.rate }</span>
          <span className="text-muted">Guaranteed Rate</span>
        </li>
      </ul>
    )
  }
};

export default QuoteFees;
