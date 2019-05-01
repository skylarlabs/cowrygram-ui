import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Button, ActionButton } from '../../components/ui/buttons';
import Select from 'react-select'

import Template from '../../components/dashboard/template';
import RecipientDetail from '../../components/send/recipient-detail';
import QuoteInput from '../../components/send/quote-input';
import QuoteFees from '../../components/send/quote-fee';
import AddRecipientModal from '../recipients/modal';


@inject('RecipientStore', 'QuoteStore')
@observer
class ChoseRecipientContainer extends Component {
  store = () => this.props.RecipientStore;
  quoteStore = () => this.props.QuoteStore;

  getQuoteId = () => this.props.match.params.quoteId;
  getNextLink = () => `/send/${this.getQuoteId()}/fund`;

  toggle = () => this.store().toggleModal();
  onChange = recipient => this.store().onRecipientSelected(recipient);

  componentDidMount = () => {
    this.quoteStore().fetchQuote(this.getQuoteId());
    this.store().fetch();
  }

  render() {
    const { isLoading, options, selectedRecipient } = this.store();
    const quoteStore = this.quoteStore();

    return (
      <Template>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-lg-7 border px-md-5 py-4 f-shadow rounded">
            <div className="d-block text-right mb-3">
              <h5 className="font-weight-bold text-center">Chose Recipient</h5>
              <Button className="btn-primary d-inline-block" onClick={ this.toggle }>Add Recipient</Button>
            </div>
            <div>
              <Select className="select--recipient my-3" options={ options } onChange={ this.onChange } isLoading={ isLoading }/>
              <RecipientDetail recipient={ selectedRecipient } quote={ quoteStore.quote } />
              <NavLink to={ this.getNextLink() } className="btn btn-primary btn-block btn-sp">Continue</NavLink>
            </div>
          </div>
        </div>
        <AddRecipientModal toggle={ this.toggle } />
      </Template>
    )
  }
}

export default ChoseRecipientContainer;
