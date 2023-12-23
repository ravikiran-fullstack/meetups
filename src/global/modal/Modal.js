import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ message, cancelAction, confirmAction }) => {
  console.log('Modal', message);
  const closeModal = (flag) => {
    cancelAction(flag);
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <span className="close" onClick={cancelAction}>
          &times;
        </span>
        <p>Message: {message}</p>
      </div>
      <div>
        <button className="btn" onClick={() => closeModal(false)}>
          Cancel
        </button>
        <button className="btn" onClick={() => closeModal(true)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
