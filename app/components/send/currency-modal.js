import React, { Component } from 'react';
import { Input } from '../ui/inputs';
import { Button } from '../ui/buttons';
import Message from '../ui/message';
import Badge  from '../ui/badge';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '../ui/modal';
import Spinner from '../ui/progress';
import { cls, search }  from '../util';
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
    const { show, toggle, onClick, active } = this.props;

    const items = (data || currencies).map((c) => (
      <CurrencyItem key={ c.currency }
                    currency={ c }
                    onClick={ onClick }
                    active={ c.currency == active } />
    ));

    return (
      <Modal show={ show } onClose={ toggle }>
        <ModalTitle>Select Currency</ModalTitle>

        <ModalBody>
          <Input className="form-control p-4" placeholder="USD" onChange={ this.onChange } />
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
          <Button className="btn-secondary" onClick={ toggle }>Continue</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ChoseCurrencyModal;
