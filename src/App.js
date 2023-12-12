import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllMeetups from './components/pages/AllMeetups';
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import NewMeetup from './components/pages/NewMeetup';
import Favorites from './components/pages/Favorites';
import Modal from './components/global/modal/Modal';

const App = () => {
  const [meetups, setMeetups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [clearForm, setClearForm] = useState(false);
  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://localhost:4000/api/meetups');
        setMeetups(result.data);
      } catch (error) {
        setMeetups([]);
        console.log(error);
      }
    }
    fetchData();
  }, [listUpdated]);

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

    const postUpdatedMeetup = async () => {
      try {
        const result = await axios.post('http://localhost:4000/api/meetups', data);
        console.log(result);
      } catch (error) {
        console.log(error)
      }
    }

    postUpdatedMeetup();
  }

  const deleteMeetup = (id) => {
    console.log('deleteMeetup', id);
    const updatedMeetups = meetups.filter(meetup => meetup.id !== id);
    setMeetups(updatedMeetups);
  }

     const updateFavorite = async (id) => {
       try {
         const result = await axios.put(
           `http://localhost:4000/api/meetups/favorites/${id}`
         );
         console.log(result.data);
         setListUpdated(!listUpdated);
       } catch (error) {
         console.log(error);
       }
     };

  return (
    <div className="container">
      <Header />
      {modalMessage}
      <Switch>
        <Route path="/" exact>
          <AllMeetups
            meetupsList={meetups}
            deleteMeetup={deleteMeetup}
            updateFavorite={updateFavorite}
          />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup
            clearForm={clearForm}
            showModalToUser={showModalToUser}
            updateFormData={updateFormData}
          />
        </Route>
      </Switch>
      <Footer />
      {showModal && <Modal message={modalMessage} cancelAction={closeModal} />}
    </div>
  );
};

export default App;
