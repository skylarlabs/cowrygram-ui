import { observable, action, computed } from 'mobx';
import { mapInputToStatex } from '../util';

import { recipients, money } from '../../api';

import nav from '../nav';

const modalForm = {
  'name': '',
  'email': '',
  'bank_account': '',
  'swift_code': ''
};


class RecipientStore {
  @observable isLoading = false;
  @observable error = null;
  @observable recipients = [];
  @observable selectedRecipient = null;

  @observable modal = {
    show: false,
    isLoading: false,
    error: null,
    form: modalForm
  };

  @action async fetch() {
    this.isLoading = true;
    const [data, error] = await recipients.fetchRecipients();
    this.isLoading = false;
    this.error = error ? error.message : null;
    this.recipients = error ? [] : data.recipients;
  }

  @computed get options() {
    return this.recipients.map((recipient, index) => ({
      value: recipient.id, label: recipient.name, index
    }));
  }


  /* select recipient */
  @action onRecipientSelected = recipient => this.selectedRecipient = this.recipients[recipient.index];
  @action async setRecipient(quoteId) {
    this.isLoading = true;
    const [data, error] = await money.setRecipient(quoteId, this.selectedRecipient.id);

    this.isLoading = false;
    this.error = error ? error.message : null;

    if (!error) {
      nav.push(`/send/${quoteId}/fund`);
    }
  }

  /* add-recipient-modal */
  @action toggleModal = () => this.modal.show = !this.modal.show;
  @action onModalFormChange = (e) => mapInputToStatex(e, this.modal.form);

  @action async addRecipient(e) {
    if (this.modal.isLoading) return;

    e.preventDefault();
    this.modal.isLoading = true;
    const [data, error] = await recipients.addRecipient(this.modal.form);
    this.modal.isLoading = false;
    this.modal.error = error ? error.message : null;

    if (data) {
      this.modal.show = false;
      this.modal.form = modalForm;
      this.recipients.push(data.recipient);
    }
  }
}


export default new RecipientStore();