import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Input } from '../../components/ui/inputs';
import { Button, ActionButton } from '../../components/ui/buttons';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '../../components/ui/modal';
import Template from '../../components/dashboard/template';
import Spinner from '../../components/ui/progress';
import Message from '../../components/ui/message';


@inject('RecipientStore')
@observer
class AddRecipientModal extends Component {
  store = () => this.props.RecipientStore;
  onSubmit = e => this.store().addRecipient(e);
  onChange = e => this.store().onModalFormChange(e);

  render() {
    const { show, form, isLoading, error } = this.store().modal;

    return (
      <Modal show={ show } onClose={ this.props.toggle }>
        <ModalTitle>Add Recipient</ModalTitle>
        <form onSubmit={ this.onSubmit } >
          { error && <Message className="mb-3">{ error }</Message> }

          <ModalBody>
            <Input className="form-control mb-3 p-4" name="name" placeholder="Recipient Name" required  onChange={ this.onChange } value={ form.name } />
            <Input className="form-control mb-3 p-4" type="email" name="email" placeholder="Recipient Email Address" required onChange={ this.onChange } value={ form.email } />
            <Input className="form-control mb-3 p-4" name="bank_account" placeholder="IBAN" required onChange={ this.onChange } value={ form.bank_account } />
            <Input className="form-control mb-3 p-4" name="swift_code" placeholder="Swift Code" required onChange={ this.onChange } value={ form.swift_code } />
          </ModalBody>

          <ModalFooter>
            <Button className="btn-secondary" onClick={ this.props.toggle }>Close</Button>
            <ActionButton className="btn-primary" type="submit" loading={ isLoading }>Add Recipient</ActionButton>
          </ModalFooter>
        </form>
      </Modal>
    )
  }
}

export default AddRecipientModal;
