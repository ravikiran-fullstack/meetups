import React from 'react';

const Modal = ({ confirmDelete, cancelDeletion }) => {
  return (
    <div className="modal-content">
      <h3>Confirm deleting the todo</h3>
      <div>
        <button className="btn btn--alt" onClick={cancelDeletion}>
          Cancel
        </button>
        <button className="btn" onClick={confirmDelete}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
