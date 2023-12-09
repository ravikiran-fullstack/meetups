import React, { useState } from 'react';
import Todo from './Todo';
import Modal from './Modal';
import Backdrop from './Backdrop';

const TodoCards = ({ todos, setTodos }) => {
  const [showModal, setShowModal] = useState(false);
  const [tobeDeletedId, setTobeDeletedId] = useState('');
  const [deletionStarted, setDeletionStarted] = useState(false);

  const closeModal = (event) => {
    console.log('closeModal called');
    if (event.target.classList.contains('backdrop')) setShowModal(false);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const showModalBox = (id) => {
    console.log('showModalBox called');
    setTobeDeletedId(id);
    handleModal();
  };

  const confirmDelete = () => {
    handleModal();
    handleDelete(tobeDeletedId);
  };

  const cancelDeletion = () => {
    handleModal();
  };

  const handleDelete = (id) => {
    console.log('Deleting todo with id: ' + id);
    setDeletionStarted(true);
    setTimeout(() => {
      setTodos((prevTodos) => {
        setDeletionStarted(false);
        return prevTodos.filter((todo) => todo.id !== id);
      });
    }, 500);
  };
  return (
    <>
      <div className="todoCards">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            deletionStarted={deletionStarted}
            tobeDeletedId={tobeDeletedId}
            showModalBox={showModalBox}
          />
        ))}
      </div>
      {showModal && (
        <Modal confirmDelete={confirmDelete} cancelDeletion={cancelDeletion} />
      )}
      {showModal && <Backdrop closeModal={closeModal} />}
    </>
  );
};

export default TodoCards;
