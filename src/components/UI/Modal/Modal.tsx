import React from 'react';
import classNames from 'classnames';
import './Modal.css';

type TModal = {
  visible: boolean;
};

class Modal extends React.Component<TModal> {
  render() {
    return (
      <div className={classNames('modal', { ['active']: this.props.visible })}>
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          {this.props.children}
          <button className="modal-btn">x</button>
        </div>
      </div>
    );
  }
}

export default Modal;
