import React, { Component } from 'react';
import { Input } from '../ui/inputs';
import { Button } from '../ui/buttons';


class QuoteInput extends Component {
  render() {
    const { name, label, value, currency, onChange } = this.props;

    return (
      <div className="form-group form-group-lg position-relative">
        <label className="quote-label mb-0" htmlFor={ name }>{ label }</label>
        <div className="input-group">
          <Input className="form-control quote-input" id={ name } placeholder="1,000" name={ name } value={ value } onChange={ onChange } />
          <div className="btn-group" role="group">
            <Button className="btn-secondary btn-lg btn-quote-currency font-weight-bold dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span>{ currency }</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuoteInput;