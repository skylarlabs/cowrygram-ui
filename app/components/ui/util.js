import React from 'react';
import { cls } from '../util';

const ContainerElement = (name, klass) => {
  const component =  (props) => {
    const className = cls(klass, props.klass);
    return <div className={ className }>{ props.children }</div>
  };

  component.displayName = name;
  return component;
};

const ShowIf = () => {};

export { ContainerElement, ShowIf };