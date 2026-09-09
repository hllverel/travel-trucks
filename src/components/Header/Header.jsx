import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoTravel}>Travel</span>
        <span className={styles.logoTrucks}>Trucks</span>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;