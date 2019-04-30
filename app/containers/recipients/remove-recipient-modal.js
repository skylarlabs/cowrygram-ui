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
class RemoveRecipientModal extends Component {
  store = () => this.props.RecipientStore;

  render() {
    const [error, isLoading] = [null, false];

    return (
      <Modal show={ false } onClose={ this.props.toggle }>
        <ModalTitle>Remove Recipient</ModalTitle>
        { error && <Message className="mb-3">{ error }</Message> }

        <ModalBody>
          <div className="text-center">Do you really want to remove this recipient ?</div>
        </ModalBody>

        <ModalFooter>
          <Button className="btn-secondary" onClick={ this.props.toggle }>Close</Button>
          <ActionButton className="btn-danger" type="submit" loading={ isLoading }>Remove Recipient</ActionButton>
        </ModalFooter>
      </Modal>
    )
  }
}

export default RemoveRecipientModal;
