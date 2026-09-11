import { useSelector } from 'react-redux';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import styles from './FavouritesPage.module.css';

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.items);

  if (favourites.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h2>No favourites yet</h2>
        <p>Campers you favourite will show up here.</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {favourites.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default FavouritesPage;