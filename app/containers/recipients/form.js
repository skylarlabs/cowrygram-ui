import React, { Component } from 'react';
import Select from 'react-select';
import { inject, observer } from 'mobx-react';

import { Input } from '../../components/ui/inputs';
import OpSpinner from '../../components/ui/op-spinner';


const mCurrencyOptions = [
  { label: 'Indian Rupee', value: 'INR'},
  { label: 'United States Dollar', value: 'USD'},
  { label: 'Euro', value: 'EUR'},
  { label: 'British Pound', value: 'GBP'},
];


const getElm = (field, onChange, onSelect) => {
  const { args } = field;
  const key = args.name;

  switch(field.type) {
    case 'input':
      const input = <Input key={ key } { ...args } onChange={ onChange }/>;

      if (field.groupClassName)
        return (
          <div className={ field.groupClassName }>{ input }</div>
        )
      return input;

    case 'dropdown':
      const select = (
        <Select key={ key }
                className="select--recipient mb-3"
                options={ args.options }
                onChange={ (e) => onSelect({ name: args.name,  e })  } />
      );

      if (field.groupClassName)
        return (
          <div className={ field.groupClassName }>{ select }</div>
        )
      return select;

    case 'form-row':
      return <FormRow key={ key } field={ field } onChange={ onChange } onSelect={ onSelect } />
  }
};


const FormRow = ({ field, onChange, onSelect }) => {
  const elms = [];

  for (const child of field.children) {
    elms.push(getElm(child, onChange, onSelect));
  }

  return (
    <div>
      { field.label && <label className="text-muted">{ field.label }</label> }
      <div className="form-row align-items-center">
        { elms }
      </div>
    </div>
  );
};


@inject('RecipientFormStore')
@observer
class RecipientForm extends Component {
  store = () => this.props.RecipientFormStore;

  onChange = e => this.store().onChange(e);

  onSelected = (e) => this.store().onSelected(e);

  onCurrencySelected = e => {
    this.store().onCurrencySelected(e);
    this.fetch();
  }

  fetch = () => this.store().fetch();

  render() {
    const { form, isLoading, error } = this.store();

    const fields = [];
    for (const field of form) {
      fields.push(getElm(field, this.onChange, this.onSelected));
    }

    return (
      <div>
        <Select className="select--recipient mb-3"
                options={ mCurrencyOptions }
                onChange={ this.onCurrencySelected } />
        <OpSpinner loading={ isLoading } error={ error } onRetry={ this.fetch } />
        { fields }
      </div>
    );
  }
};

export default RecipientForm