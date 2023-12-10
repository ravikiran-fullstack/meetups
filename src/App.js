import React, { useState } from 'react';
import AllMeetups from './components/pages/AllMeetups';
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import NewMeetupForm from './components/meetups/NewMeetupForm';
import NewMeetup from './components/pages/NewMeetup';
import Favorites from './components/pages/Favorites';
import Modal from './components/global/modal/Modal';
import { meetupsList } from './components/data/meetupsList';

const App = () => {
  const [meetups, setMeetups] = useState(meetupsList);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [clearForm, setClearForm] = useState(false);

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
