import classes from './MeetupItem.module.css';

import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
            <span
              className={`${classes.favoriteButton} ${classes.tooltip}`}
              onClick={() => props.updateFavorite(props.id)}
            >
              <FavoriteBorderOutlinedIcon />
              <span className={classes.tooltiptext}>
                Add Event to Favorites
              </span>
            </span>
          ) : (
            <span
              className={`${classes.favoriteButton} ${classes.tooltip}`}
              onClick={() => props.updateFavorite(props.id)}
            >
              <FavoriteOutlinedIcon />
              <span className={classes.tooltiptext}>
                Remove Event from Favorites
              </span>
            </span>
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
