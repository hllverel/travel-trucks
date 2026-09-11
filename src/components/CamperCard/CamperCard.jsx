import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../../store/favourites/favouritesSlice.js';
import { formatCamperField } from '../../utils/formatText';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.items);
  const isFavourite = favourites.some((item) => item.id === camper.id);

  const [country, city] = camper.location.split(', ');
  const displayLocation = `${city}, ${country}`;

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite(camper));
  };

  const handleShowMoreClick = () => {
    window.open(`/catalog/${camper.id}`, '_blank');
  };

  return (
    <li className={styles.campercard}>
      <div className={styles.camperimgdiv}>
        <img className={styles.camperimg} src={camper.gallery[0]?.thumb} alt={camper.name} />
      </div>

      <div className={styles.camperinfo}>
        <div className={styles.camperhead}>
          <h2>{camper.name}</h2>
          <div className={styles.camperheadright}>
            <h2>€{camper.price}</h2>
            <button type="button" onClick={handleFavouriteClick}>
              <svg className={isFavourite ? styles.favouriteActive : styles.favourite}>
                <use href={`/symbol-defs.svg#Favourite`} />
              </svg>
            </button>
          </div>
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

        <p className={styles.camperdescription}>{camper.description}</p>

        <ul className={styles.badgelist}>
          <li>
            <svg>
              <use href="/symbol-defs.svg#Engine" />
            </svg>
            {formatCamperField(camper.engine)}
          </li>
          <li>
            <svg>
              <use href="/symbol-defs.svg#Transmission" />
            </svg>
            {formatCamperField(camper.transmission)}
          </li>
          <li>
            <svg>
              <use href="/symbol-defs.svg#Form" />
            </svg>
            {formatCamperField(camper.form)}
          </li>
        </ul>

        <button className={styles.showmorebtn} type="button" onClick={handleShowMoreClick}>
          Show more
        </button>
      </div>
    </li>
  );
};

export default CamperCard;