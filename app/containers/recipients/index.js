import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from '../../components/ui/buttons';
import OpSpinner from '../../components/ui/op-spinner';
import Template from '../../components/dashboard/template';
import RecipientsTable from '../../components/recipients/recipients-table';
import Message from '../../components/ui/message';
import AddRecipientModal from './modal';
import RemoveRecipientModal from './remove-recipient-modal';


@inject('RecipientStore')
@observer
class RecipientContainer extends Component {
  store = () => this.props.RecipientStore;
  toggle = () => this.store().toggleModal();

  componentDidMount() {
    this.store().fetch();
  }

  render() {
    const { recipients, modal, isLoading, error } = this.store();

    return (
      <Template>
        <div className="px-3 py-2 d-flex align-items-center">Recipients
          <Button className="btn-primary ml-auto" onClick={ this.toggle }>Add Recipient</Button>
        </div>

        { recipients.length > 0 && !isLoading && <RecipientsTable recipients={ recipients } /> }
        { recipients.length == 0 && !isLoading &&
          <Message className="m-auto">You don't have a recipient yet, Click the
            <span className="badge badge-primary mx-3">Add Recipient</span>
            button to add recipient.
          </Message>
        }

        <OpSpinner loading={ isLoading } />
        <AddRecipientModal toggle={ this.toggle } />
        <RemoveRecipientModal toggle={ this.toggle } />
      </Template>
    )
  }
}

export default RecipientContainer;
