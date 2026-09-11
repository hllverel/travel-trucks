import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCamperDetailsThunk,
  clearCamperDetails,
} from '../../store/camperDetails/camperDetailsSlice.js';
import Gallery from '../../components/Gallery/Gallery.jsx';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';

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
      <Gallery images={camper.gallery} name={camper.name} />
      <h2>{camper.name}</h2>
      <p>Rating: {camper.rating} ({camper.reviews.length} Reviews)</p>
      <p>Location: {camper.location}</p>
      <p>Price: €{camper.price.toFixed(2)}</p>
      <p>{camper.description}</p>
      <VehicleDetails camper={camper} />
      <Reviews reviews={camper.reviews} />
    </div>
  );
};

export default CamperDetailsPage;