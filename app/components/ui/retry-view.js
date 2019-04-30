import React, { Component } from 'react';
import { Button } from './buttons';
import { cls } from '../util';


class RetryView extends Component {
  message = 'Something went wrong, click the button below to try again.';
  className = 'rounded bg-light p-3 text-center m-auto';

  render() {
    const { onClick, error } = this.props;

    return (
      <div className={ cls(this.className, (!error ? 'd-none' : null)) }>
        <span className="d-block text-dark">{ error ? error.message : null || this.message  }</span>
        <Button className="btn-primary mx-auto mt-2" onClick={ onClick }>Retry</Button>
      </div>
    );
  }
};

export default RetryView;