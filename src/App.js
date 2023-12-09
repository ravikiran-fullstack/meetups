import React, { useState, useEffect } from 'react';
import TodoCards from './components/TodoCards';
import TodoList from './components/TodoList';
import AllMeetups from './components/pages/AllMeetups';
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import NewMeetupForm from './components/meetups/NewMeetupForm';
import NewMeetup from './components/pages/NewMeetup';
import Favorites from './components/pages/Favorites';
import Modal from './components/global/modal/Modal';
import { meetupsList } from './components/data/meetupsList';

const todosData = [
  {
    id: 't1',
    title: 'Finish the course',
    completed: false,
  },
  {
    id: 't2',
    title: 'Take the dog for a walk',
    completed: false,
  },
  {
    id: 't3',
    title: 'Do the laundry',
    completed: false,
  },
  {
    id: 't4',
    title: 'Buy groceries',
    completed: false,
  },
  {
    id: 't5',
    title: 'Clean the house',
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosData);
  const [viewType, setViewType] = useState('cards'); // cards or list
  const [meetups, setMeetups] = useState(meetupsList);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [clearForm, setClearForm] = useState(false);

  // useEffect(() => {
  //   console.log('useEffect');
  //   setModalMessage('Meetup added successfully 1');
  // }, [showModal]);

  const showModalToUser = (message) => {
    console.log('show modal to user');
    setModalMessage(message);
    setShowModal(true);
  };

  const closeModal = (flag) => {
    console.log('close modal');
    setModalMessage('');
    setShowModal(false);
    setClearForm(flag);
  };

  const updateFormData = (data) => {
    console.log('updateFormData', data);
    setMeetups([...meetups, data]);
  }

  const deleteMeetup = (id) => {
    console.log('deleteMeetup', id);
    const updatedMeetups = meetups.filter(meetup => meetup.id !== id);
    setMeetups(updatedMeetups);
  }

  return (
    /*<div className="container">
      <h1>My Todos</h1>
      <div className="viewType">
        <button
          className={viewType === 'cards' ? 'btn active' : 'btn'}
          onClick={() => setViewType('cards')}
          disabled={viewType === 'cards'}
        >
          Cards
        </button>
        <button
          className={viewType === 'list' ? 'btn active' : 'btn'}
          onClick={() => setViewType('list')}
          disabled={viewType === 'list'}
        >
          List
        </button>
      </div>
      {viewType === 'cards' ? (
        <TodoCards todos={todos} setTodos={setTodos} />
      ) : (
        <TodoList todos={todos} updateTodos={setTodos}></TodoList>
      )}
    </div>*/
    <div className="container">
      <Header />
      {modalMessage}
      <Switch>
        <Route path="/" exact>
          <AllMeetups meetupsList={meetups} deleteMeetup={deleteMeetup} />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetup">
          React.memo(<NewMeetupForm clearForm={clearForm} showModalToUser={showModalToUser} updateFormData={updateFormData} />)
        </Route>
      </Switch>
      <Footer />
      {showModal && <Modal message={modalMessage} cancelAction={closeModal} />}
    </div>
  );
};

export default App;
