import classes from './NewMeetup.module.css';
import NewMeetupForm from '../meetups/NewMeetupForm';

const NewMeetup = ({ showModalToUser, clearForm, updateFormData }) => {
  return (
    <div className={classes.newMeetups}>
      <h1>Add New Meetup</h1>
      <NewMeetupForm
        showModalToUser={showModalToUser}
        clearForm={clearForm}
        updateFormData={updateFormData}
      />
    </div>
  );
};

export default NewMeetup;
