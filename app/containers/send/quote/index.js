import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { ActionButton } from '../../../components/ui/buttons';
import Template from '../../../components/dashboard/template';
import QuoteInput from '../../../components/send/quote-input';
import QuoteFees from '../../../components/send/quote-fee';
import { cls } from '../../../components/util';

import ChoseCurrencyModal from '../../../components/send/currency-modal';


@inject('ExchangeStore')
@observer
class QuoteContainer extends Component {
  state = { showCurrencyModal: false };

  store = () => this.props.ExchangeStore;
  onChange = e => this.store().onChange(e);

  onCurrencyChange = currency => this.store().setCurrency(currency);
  toggleModal = () => this.setState({ showCurrencyModal: !this.state.showCurrencyModal });

  render() {
    const { isLoading, form, targetCurrency, exchange, link } = this.store();

    return (
      <Template>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-lg-7 border px-md-5 py-4 f-shadow rounded">
            <h5 className="font-weight-bold text-center">Send Money</h5>

            <div className="py-3">
              <QuoteInput className="form-control mt-3"
                          label="Recipient Gets"
                          name="target_amount"
                          icon={ targetCurrency.icon }
                          currency={ form.target }
                          onChange={ this.onChange }
                          onClick={ this.toggleModal }
                          value={ form.target_amount } />

              { exchange && <QuoteFees exchange={ exchange }/> }

              <QuoteInput label="You Pay" name="source_amount" currency="NGN" icon="flag-ngn" disabled={ true } onChange={ this.onChange } value={ form.source_amount }/>
            </div>

            <NavLink className={ cls("btn btn-primary btn-block btn-sp font-weight-bold", !link && 'disabled-link') } to={ link }>Continue</NavLink>

            <ChoseCurrencyModal show={ this.state.showCurrencyModal }
                                active={ form.target }
                                toggle={ this.toggleModal }
                                onClick={ this.onCurrencyChange }/>
          </div>
        </div>
      </Template>
    )
  }
}

export default QuoteContainer;
