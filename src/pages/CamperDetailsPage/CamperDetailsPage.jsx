import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCamperDetailsThunk,
  clearCamperDetails,
} from '../../store/camperDetails/camperDetailsSlice.js';
import { toggleFavourite } from '../../store/favourites/favouritesSlice.js';
import Gallery from '../../components/Gallery/Gallery.jsx';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import ReservationForm from '../../components/ReservationForm/ReservationForm.jsx';
import Loader from '../../components/Loader/Loader.jsx'
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.camperDetails.camper);
  const status = useSelector((state) => state.camperDetails.status);
  const error = useSelector((state) => state.camperDetails.error);
  const favourites = useSelector((state) => state.favourites.items);

  useEffect(() => {
    dispatch(fetchCamperDetailsThunk(id));

    return () => {
      dispatch(clearCamperDetails());
    };
  }, [dispatch, id]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (!camper) {
    return null;
  }

  const [country, city] = camper.location.split(', ');
  const displayLocation = `${city}, ${country}`;

  const isFavourite = favourites.some((item) => item.id === camper.id);

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite(camper));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.tophalf}>
        <Gallery images={camper.gallery} name={camper.name} />
        <div className={styles.topright}>
          <div className={styles.camperinfo}>
            <div className={styles.camperhead}>
              <h2>{camper.name}</h2>
              <button type="button" onClick={handleFavouriteClick}>
                <svg className={isFavourite ? styles.favouriteActive : styles.favourite}>
                  <use href={`/symbol-defs.svg#Favourite`} />
                </svg>
              </button>
            </div>
            <div className={styles.campersubhead}>
              <div>
                <svg>
                  <use href="/symbol-defs.svg#Star" />
                </svg>
                <span>{camper.rating} ({camper.reviews.length} Reviews)</span>
              </div>

              <div>
                <svg>
                  <use href="/symbol-defs.svg#Map" />
                </svg>
                <span>{displayLocation}</span>
              </div>
            </div>
            <h2>€{camper.price}</h2>
            <p>{camper.description}</p>
          </div>
          <VehicleDetails camper={camper} />
        </div>
      </div>
      <div>
        <h2 className={styles.reviews}>Reviews</h2>
        <div className={styles.bottomhalf}>
          <Reviews reviews={camper.reviews} />
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;