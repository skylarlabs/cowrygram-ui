import React, { Component } from 'react';
import Template from '../../../components/dashboard/template';
import { Input } from '../../../components/ui/inputs';
import { Button } from '../../../components/ui/buttons';
import Message from '../../../components/ui/message';
import Badge  from '../../../components/ui/badge';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '../../../components/ui/modal';
import Spinner from '../../../components/ui/progress';
import { cls, search }  from '../../../components/util';
import currencies from './currencies';


const CurrencyItem = ({ currency, onClick, active }) => (
  <li className={ cls('row-item currency-item px-3 py-2 border-bottom', active && 'bg-secondary text-light') }
      onClick={ () => { onClick(currency) }}>
    <span>
      <i className={ cls('flag', currency.icon , 'mr-3') }></i>
      <span className="font-weight-bold">{ currency.currency }</span>
      <span className="pl-2">{ currency.name }</span>
    </span>
  </li>
);


class ChoseCurrencyModal extends Component {
  state = {
    currencies,
    filter: '',
    data: null
  };

  onChange = ({ target }) => {
    const filter = target.value;
    this.setState({
      filter,
      data: (!filter ? null : this.state.data)
    });

    this.filter(filter);
  }

  filter = query => {
    if (!query) return;

    this.setState({
      data: this.state.currencies.filter(({ name, currency }) => (search(name, query) || search(currency, query)))
    });
  }

  render() {
    const { filter, data, currencies } = this.state;
    const { onClick, active } = this.props;

    const items = (data || currencies).map((c) => (
      <CurrencyItem key={ c.currency }
                    currency={ c }
                    onClick={ onClick }
                    active={ c.currency == active } />
    ));

    return (
      <Modal show={ true }>
        <ModalTitle>Select Currency</ModalTitle>

        <ModalBody>
        </ModalBody>

        <ul className="currencies">
          { items }
          {
            items.length == 0 &&
            <Message>
              No currency matching <Badge className="badge-success">{ filter }</Badge> found
            </Message>
          }
        </ul>

        <ModalFooter>
          <Button className="btn-secondary">Continue</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ChoseCurrencyModal;
