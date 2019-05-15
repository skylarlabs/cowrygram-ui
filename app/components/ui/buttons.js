import React from 'react';
import { cls } from '../util';
import { ContainerElement } from './util';
import Spinner from './progress';


const BorderedButton = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button className={`btn btn-bordered ${className}`} {...rest}>{ children }</button>
  )
}

const Button = (props) => {
  const { children, className, ...rest } = props;
  return <button className={ cls('btn', className) } {...rest}>{ children }</button>
}

const ActionButton = (props) => {
  const { className, loading, children, ...rest } = props;

  return (
    <Button className={ cls(className, 'position-relative') } { ...rest } disabled={ loading }>
      { children }
      <Spinner show={ loading } klass="action-spinner position-absolute d-inline-block" />
    </Button>
  )
}

const ActionGroup = ContainerElement('ActionGroup', 'action-btn-group d-flex');

export {
  BorderedButton,
  ActionButton,
  ActionGroup,
  Button
};
