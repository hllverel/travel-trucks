import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favourites"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        Favourites
    </NavLink>
    </nav>
  );
};

export default Navigation;