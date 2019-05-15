import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ActionButton } from '../../components/ui/buttons';
import Template from '../../components/dashboard/template';
import QuoteInput from '../../components/send/quote-input';
import QuoteFees from '../../components/send/quote-fee';
import PayStackComponent from './paystack';


@inject('ExchangeStore')
@observer
class QuoteContainer extends Component {
  store = () => this.props.ExchangeStore;
  onChange = e => this.store().onChange(e);

  render() {
    const { form , exchange } = this.store();

    return (
      <Template>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-lg-7 border px-5 py-4 f-shadow rounded">
            <h5 className="font-weight-bold text-center mb-3">Fund this Transfer </h5>
            <PayStackComponent />
          </div>
        </div>
      </Template>
    )
  }
}

export default QuoteContainer;
