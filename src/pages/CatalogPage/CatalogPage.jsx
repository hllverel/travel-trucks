import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampersThunk } from '../../store/campers/campersSlice';
import {
  selectVisibleCampers,
  selectCampersStatus,
  selectCampersError,
} from '../../store/campers/campersSelectors';
import CamperCard from '../../components/CamperCard/CamperCard';

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
      <ul>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;