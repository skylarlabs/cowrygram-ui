import React, { Component } from 'react';
import Spinner from './progress';
import RetryView from './retry-view';

import { cls } from '../util';

class OpSpinner extends Component {
  render() {
    const { onRetry, loading, error } = this.props;

    return (
      <div className={ cls('my-auto', ((!error && !loading) ? 'd-none' : null)) }>
        <Spinner show={ loading } klass='spinner-lg' />
        <RetryView onClick={ onRetry } error={ error } />
      </div>
    );
  }
};


export default OpSpinner;