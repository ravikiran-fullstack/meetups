import { useState, useEffect } from 'react';
import classes from './NewMeetupForm.module.css';

import { v4 as uuidv4} from 'uuid';

const NewMeetupForm = ({ clearForm, showModalToUser, updateFormData }) => {
  const [disableSubmit, setDisableSubmit] = useState(false);
  console.log('NewMeetupForm', clearForm);
  const [meetupData, setMeetupData] = useState({
    title: '',
    image: '',
    address: '',
    description: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    console.log('useEffect', clearForm);
    if (clearForm) {
      clear();
    }
  }, [clearForm]);

  const clear= () => {
    setMeetupData({
      title: '',
      image: '',
      address: '',
      description: '',
      date: '',
      time: '',
    });
  }

  function updateField() {
    return (e) => {
      return setMeetupData({ ...meetupData, [e.target.name]: e.target.value });
    };
  }

  console.log('NewMeetupForm', uuidv4());
  const submitHandler = (e) => {
    setDisableSubmit(true);
    e.preventDefault();
    console.log(meetupData);
    updateFormData({ ...meetupData, id: uuidv4() });
    setTimeout(() => {
      setDisableSubmit(false);
      clear();
    }, 2000);
  };

  const clearFormData = () => {
    showModalToUser('Clear entered meetup data?');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="title">Meetup Title</label>
        <input
          type="text"
          name="title"
          required
          id="title"
          onChange={updateField()}
          value={meetupData.title}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="image">Meetup Image</label>
        <input
          type="url"
          name="image"
          required
          id="image"
          onChange={updateField()}
          value={meetupData.image}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          required
          id="address"
          onChange={updateField()}
          value={meetupData.address}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          required
          rows="5"
          onChange={updateField()}
          value={meetupData.description}
        ></textarea>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          required
          id="date"
          onChange={updateField()}
          value={meetupData.date}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          required
          id="time"
          onChange={updateField()}
          value={meetupData.time}
        />
      </div>
      <div className={classes.formActions}>
        <button type="button" className="btn" onClick={clearFormData}>
          Clear
        </button>
        <button type="submit" className="btn" disabled={disableSubmit}>
          {disableSubmit ? 'Adding...' : 'Add Meetup'}
        </button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
