import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <svg className={styles.logo}>
          <use href="/symbol-defs.svg#TravelTrucksLogo"></use>
        </svg>
      </Link>
      <Navigation />
      <div className={styles.logo}></div>
    </header>
  );
};

export default Header;