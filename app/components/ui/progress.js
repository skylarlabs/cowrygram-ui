import React from 'react';
import { cls } from '../util';


const Spinner = (props) => {
  const {show, centered, klass} = props;

  if (!show) return null;
  return (
    <div className={ cls('spinner', (centered ? 'centered-spinner': null) , klass) }></div>
  )
};


export default Spinner;