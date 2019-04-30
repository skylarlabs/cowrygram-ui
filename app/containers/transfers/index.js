import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from '../../components/ui/buttons';
import OpSpinner from '../../components/ui/op-spinner';
import Template from '../../components/dashboard/template';
import TransfersTable from '../../components/transfers/transfers-table';
import Message from '../../components/ui/message';


@inject('TransferStore')
@observer
class TransfersContainer extends Component {
  store = () => this.props.TransferStore;

  componentDidMount() {
    this.store().fetch();
  }

  render() {
    const { transfers, isLoading, error } = this.store();

    return (
      <Template>
        <div className="px-3 py-2 d-flex align-items-center">Transfers</div>

        { transfers.length > 0 && !isLoading && <TransfersTable transfers={ transfers } /> }
        { transfers.length == 0 && !isLoading &&
          <Message className="m-auto">You have not made any transfers yet, Go to the
            <span className="badge badge-primary mx-3">Send</span>
            page and make your first transfers.
          </Message>
        }

        <OpSpinner loading={ isLoading } />
      </Template>
    )
  }
}

export default TransfersContainer;
