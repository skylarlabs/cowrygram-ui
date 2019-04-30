import { observable, action } from 'mobx';


class SendMoneyStore {
  @observable isLoading = false;
  @observable error = null;
}


export default new SendMoneyStore();