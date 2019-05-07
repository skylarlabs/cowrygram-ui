import React, { Component } from 'react';
import { Input } from '../ui/inputs';
import { Button } from '../ui/buttons';
import { cls } from '../util';
import Spinner from '../ui/progress';


class QuoteInput extends Component {
  render() {
    const { name, loading, label, value, currency, icon, onClick, onChange, disabled } = this.props;

    return (
      <div className="form-group form-group-lg position-relative">
        <label className="quote-label mb-0 d-flex" htmlFor={ name }>
          { label }
          <Spinner show={ loading } klass="quote-spinner ml-1"/>
        </label>
        <div className="input-group">
          <Input className="form-control quote-input" id={ name } placeholder="1,000" name={ name } value={ value } onChange={ onChange } disabled={ disabled }/>
          <div className="btn-group" role="group">
            <Button className="btn-secondary btn-quote-currency font-weight-bold dropdown-toggle" type="button" onClick={ onClick } aria-haspopup="true" aria-expanded="false">
              <span><i className={ cls('flag', icon ) }></i>{ currency }</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuoteInput;