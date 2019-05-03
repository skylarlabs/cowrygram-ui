import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { ActionButton } from '../../components/ui/buttons';
import Template from '../../components/dashboard/template';
import QuoteInput from '../../components/send/quote-input';
import QuoteFees from '../../components/send/quote-fee';
import SendMoneyModal from './send-modal';
import { cls } from '../../components/util';


@inject('ExchangeStore')
@observer
class QuoteContainer extends Component {
  store = () => this.props.ExchangeStore;
  onChange = e => this.store().onChange(e);

  render() {
    const { form , exchange, link } = this.store();

    return (
      <Template>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-lg-7 border px-5 py-4 f-shadow rounded">
            <h5 className="font-weight-bold text-center">Send Money</h5>

            <div className="py-3">
              <QuoteInput label="You Send" name="source_amount" currency="NGN" onChange={ this.onChange } value={ form.source_amount }/>
              { exchange && <QuoteFees exchange={ exchange }/> }
              <QuoteInput label="You Recieve" className="form-control mt-3" name="target_amount" currency="USD" onChange={ this.onChange } value={ form.target_amount } />

            </div>

            <NavLink className={ cls("btn btn-primary btn-block btn-sp font-weight-bold", !link && 'disabled-link') } to={ link }>Continue</NavLink>
          </div>
        </div>
      </Template>
    )
  }
}

export default QuoteContainer;
