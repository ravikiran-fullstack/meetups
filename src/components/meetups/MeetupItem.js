import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          <h3>{props.title}</h3>
          <h3>
            {props.time} on {props.date}
          </h3>
        </div>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div className={classes.actions}>
          {!props.favorite ? (
            <button onClick={() => props.updateFavorite(props.id)}>Add To Favorites</button>
          ) : (
            <button onClick={() => props.updateFavorite(props.id)}>Remove From Favorites</button>
          )}
          <button onClick={() => props.deleteMeetup(props.id)}>
            Delete Meetup
          </button>
        </div>
      </div>
    </li>
  );
};

export default MeetupItem;
