import React from 'react';
import { cls } from '../util';


export default ({ children, className }) => (
  <div className={ cls("bg-light p-3 text-center rounded", className) }>{ children }</div>
);