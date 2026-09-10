import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCamperDetailsThunk,
  clearCamperDetails,
} from '../../store/camperDetails/camperDetailsSlice.js';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.camperDetails.camper);
  const status = useSelector((state) => state.camperDetails.status);
  const error = useSelector((state) => state.camperDetails.error);

  useEffect(() => {
    dispatch(fetchCamperDetailsThunk(id));

    return () => {
      dispatch(clearCamperDetails());
    };
  }, [dispatch, id]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (!camper) {
    return null;
  }

  return (
    <div>
      <h1>{camper.name}</h1>
      <p>Rating: {camper.rating} ({camper.reviews.length} Reviews)</p>
      <p>Location: {camper.location}</p>
      <p>Price: €{camper.price.toFixed(2)}</p>
      <p>{camper.description}</p>
    </div>
  );
};

export default CamperDetailsPage;