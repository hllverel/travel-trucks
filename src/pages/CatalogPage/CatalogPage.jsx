import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampersThunk } from '../../store/campers/campersSlice.js';
import {
  selectVisibleCampers,
  selectCampersStatus,
  selectCampersError,
} from '../../store/campers/campersSelectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectVisibleCampers);
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Catalog Page</h1>
      <p>Loaded {campers.length} campers</p>
      <pre>{JSON.stringify(campers, null, 2)}</pre>
    </div>
  );
};

export default CatalogPage;