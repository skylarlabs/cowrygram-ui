import React from 'react';
import { cls } from '../util';

export default ({ children, className }) => (
  <span className={ cls("badge", className) }>{ children }</span>
);