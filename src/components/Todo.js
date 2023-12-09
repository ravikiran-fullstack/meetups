import React from 'react';

const Todo = ({ id, title, showModalBox, deletionStarted, tobeDeletedId }) => {
  return (
    <div
      className={
        deletionStarted && tobeDeletedId === id
          ? 'card deletionEnabledStyle'
          : 'card'
      }
      id={id}
    >
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={() => showModalBox(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

Todo.defaultProps = {
  id: '',
  title: 'Default Title',
  showModalBox: () => {},
};

export default Todo;
