import React from 'react';
import MeetupList from '../meetups/MeetupList';
import classes from './AllMeetups.module.css';



const AllMeetups = ({ meetupsList, deleteMeetup }) => {
  const updateMeetupList = (newMeetup) => {
    meetupsList.push(newMeetup);
    console.log(meetupsList);
  };

  return (
    <div className={classes.allMeetupContainer}>
      <h1>All Meetups</h1>
      <MeetupList
        meetups={meetupsList}
        updateMeetupList={updateMeetupList}
        deleteMeetup={deleteMeetup}
      />
    </div>
  );
};

export default AllMeetups;
