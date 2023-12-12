import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups && props.meetups.length  > 0 ? props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          date={meetup.date}
          time={meetup.time}
          favorite={meetup.favorite}
          description={meetup.description}
          deleteMeetup={props.deleteMeetup}
          updateFavorite={props.updateFavorite}
        />
      )) : <p>No meetups found</p>}
    </ul>
  );
}

export default MeetupList