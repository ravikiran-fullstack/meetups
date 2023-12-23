import { useState, useEffect } from 'react';
import classes from './Favorites.module.css';

import axios from 'axios';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = ({ meetupsList, deleteMeetup }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const favorites = await axios.get(
          'http://localhost:4000/api/meetups/favorites'
        );
        setLoading(false);
        setFavorites(favorites.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchFavorites();
  }, [listUpdated]);

  const updateFavorite = async(id) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/api/meetups/favorites/${id}`
      );
      console.log(result.data)
      setListUpdated(!listUpdated);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.favorites}>
      <h1>My Favorites</h1>
      {loading ? (
        <p className={classes.loader}>Loading...</p>
      ) : (
        <MeetupList
          meetups={favorites}
          updateMeetupList={setFavorites}
          deleteMeetup={deleteMeetup}
          updateFavorite={updateFavorite}
        />
      )}
    </div>
  );
};

export default Favorites;
