import React from 'react';
import { cls } from '../util';

const Input = (props) => {
  return (
    <input spellCheck="false" autoComplete="off" {...props} />
  )
};

Input.defaultProps = {
  type: "text",
  className: "form-control"
}

const FormGroupInput = (props) => {
  const { klass, ...rest } = props;
  const klassName = cls('form-control', klass);
  const inputId = `${rest.name}-input`;

  return (
    <div>
      <label for={ inputId } className="sr-only">{ rest.placeholder }</label>
      <Input id={ inputId } className={ klassName } { ...rest } autofocus={true}/>
    </div>
  );
};

export {
  Input,
  FormGroupInput
};