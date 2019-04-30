import React, { Component } from 'react';
import { cls, clsIf } from '../util';
import { Button } from './buttons';

class Modal extends Component {
  render() {
    const { className, children, show, onClose } = this.props;
    return (
      <div className={ cls('modal fade', show && 'show') } role="dialog" tabIndex="-1">
        <div className={ cls('modal-dialog', className) } role="document">
          <div className="my-4 float-right modal-action pea">
            <Button className="btn-secondary btn-rounded font-weight-bold px-4 cp" onClick={ onClose }>Close</Button>
          </div>

          <div className="modal-content">
            { children }
          </div>
        </div>
      </div>
    );
  }
};

const ModalTitle = (props) => {
  const { children } = props;

  return (
    <div className="modal-header d-block">
      <h5 className="modal-title text-center font-weight-bold">{ children }</h5>
    </div>
  )
};

const ModalFooter = (props) => {
  return (
    <div className="modal-footer">
      { props.children }
    </div>
  )
};

const ModalBody = (props) => {
  return (
    <div className="modal-body">
      { props.children }
    </div>
  )
};

export {
  Modal, ModalTitle, ModalBody, ModalFooter
};