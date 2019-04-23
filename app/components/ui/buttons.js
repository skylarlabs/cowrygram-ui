import React from 'react';
import { cls } from '../util';
import { ContainerElement } from './util';

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
  const { icon: Icon, klass, children } = props;
  return (
    <Button className={ klass }>{ children }<Icon /></Button>
  )
}

const ActionGroup = ContainerElement('ActionGroup', 'action-btn-group d-flex');

export {
  BorderedButton,
  ActionButton,
  ActionGroup,
  Button
};
