import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Meetup</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header