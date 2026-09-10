import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampersThunk, loadMore, resetVisibleCount } from '../../store/campers/campersSlice.js';
import { resetFilters } from '../../store/filters/filtersSlice.js';
import {
  selectVisibleCampers,
  selectCampersStatus,
  selectCampersError,
  selectHasMore,
} from '../../store/campers/campersSelectors.js';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import FilterForm from '../../components/FilterForm/FilterForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import NoCampersFound from '../../components/NoCampersFound/NoCampersFound.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectVisibleCampers);
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);
  const hasMore = useSelector(selectHasMore);

  const [filterFormKey, setFilterFormKey] = useState(0);

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(loadMore());
  };

  const handleClearFilters = () => {
    dispatch(resetFilters());
    dispatch(resetVisibleCount());
    setFilterFormKey((prev) => prev + 1);
  };

  return (
    <div className={styles.layout}>
      <FilterForm key={filterFormKey} />

      <div className={styles.camperlistdiv}>
        {status === 'loading' && <Loader />}
        {status === 'failed' && <p>Error: {error}</p>}

        {status === 'succeeded' && (
          campers.length === 0 ? (
            <NoCampersFound onClear={handleClearFilters} />
          ) : (
            <>
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
            </>
          )
        )}
      </div>
    </div>
  );
};

export default CatalogPage;