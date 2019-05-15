import React, { Component } from 'react';

import { Input } from '../../components/ui/inputs';
import { Button } from '../../components/ui/buttons';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '../../components/ui/modal';

import Spinner from '../../components/ui/progress';
import Template from '../../components/dashboard/template';


class AddRecipientModal extends Component {
  render() {
    return (
      <Modal show={ false }>
        <ModalTitle>Add Recipient</ModalTitle>

        <ModalBody>
          <Input className="form-control mb-3 p-4" placeholder="Recipient Name" />
          <Input className="form-control mb-3 p-4" type="email" placeholder="Recipient Email Address" />
          <Input className="form-control mb-3 p-4" placeholder="IBAN" />
          <Input className="form-control mb-3 p-4" placeholder="Swift Code" />
        </ModalBody>

        <ModalFooter>
          <Button className="btn-secondary">Close</Button>
          <Button className="btn-primary d-flex">Add Recipient<Spinner show={ true } klass="action-spinner" /></Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default AddRecipientModal;
