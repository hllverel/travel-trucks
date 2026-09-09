import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../../store/favourites/favouritesSlice.js';
import { formatCamperField } from '../../utils/formatText';

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
    <li>
      <div>
        <img src={camper.gallery[0]?.thumb} alt={camper.name} />
        <button type="button" onClick={handleFavouriteClick}>
          <svg>
            <use href={`/symbol-defs.svg#Favourite`} />
          </svg>
        </button>
      </div>

      <div>
        <div>
          <h2>{camper.name}</h2>
          <p>€{camper.price.toFixed(2)}</p>
        </div>

        <div>
          <svg>
            <use href="/symbol-defs.svg#Star" />
          </svg>
          <span>{camper.rating} ({camper.reviews.length} Reviews)</span>

          <svg>
            <use href="/symbol-defs.svg#Map" />
          </svg>
          <span>{displayLocation}</span>
        </div>

        <p>{camper.description}</p>

        <ul>
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

        <button type="button" onClick={handleShowMoreClick}>
          Show more
        </button>
      </div>
    </li>
  );
};

export default CamperCard;