import { observable, action } from 'mobx';
import { mapInputToStatex } from '../util';

import recipients from '../../api/recipients';


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