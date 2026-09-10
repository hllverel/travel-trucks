import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampersThunk, loadMore } from '../../store/campers/campersSlice.js';
import {
  selectVisibleCampers,
  selectCampersStatus,
  selectCampersError,
  selectHasMore,
} from '../../store/campers/campersSelectors.js';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectVisibleCampers);
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(loadMore());
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.camperlistdiv}>
      <ul className={styles.camperlist}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {hasMore && (
        <button className={styles.loadmorebtn} type="button" onClick={handleLoadMoreClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;