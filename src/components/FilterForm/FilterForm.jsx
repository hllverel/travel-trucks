import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, resetFilters } from '../../store/filters/filtersSlice';
import { resetVisibleCount } from '../../store/campers/campersSlice';
import { formatCamperField } from '../../utils/formatText';

const CAMPER_FORMS = ['alcove', 'panelTruck', 'fullyIntegrated', 'semiIntegrated'];
const ENGINES = ['diesel', 'petrol', 'hybrid', 'electric'];
const TRANSMISSIONS = ['automatic', 'manual'];
const FEATURES = [
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];

const FilterForm = () => {
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.filters);

  const [location, setLocation] = useState(reduxFilters.location);
  const [form, setForm] = useState(reduxFilters.form);
  const [engine, setEngine] = useState(reduxFilters.engine);
  const [transmission, setTransmission] = useState(reduxFilters.transmission);
  const [features, setFeatures] = useState(reduxFilters.features);

  const handleFeatureChange = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const handleSearchClick = () => {
    dispatch(setFilters({ location, form, engine, transmission, features }));
    dispatch(resetVisibleCount());
  };

  const handleClearFiltersClick = () => {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    setFeatures([]);
    dispatch(resetFilters());
    dispatch(resetVisibleCount());
  };

  return (
    <div>
      <label>
        Location
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City"
        />
      </label>

      <fieldset>
        <legend>Vehicle equipment</legend>
        {FEATURES.map((feature) => (
          <label key={feature}>
            <input
              type="checkbox"
              checked={features.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
            />
            {formatCamperField(feature)}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Vehicle type</legend>
        {CAMPER_FORMS.map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="form"
              value={value}
              checked={form === value}
              onChange={(e) => setForm(e.target.value)}
            />
            {formatCamperField(value)}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Engine</legend>
        {ENGINES.map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="engine"
              value={value}
              checked={engine === value}
              onChange={(e) => setEngine(e.target.value)}
            />
            {formatCamperField(value)}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Transmission</legend>
        {TRANSMISSIONS.map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="transmission"
              value={value}
              checked={transmission === value}
              onChange={(e) => setTransmission(e.target.value)}
            />
            {formatCamperField(value)}
          </label>
        ))}
      </fieldset>

      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
      <button type="button" onClick={handleClearFiltersClick}>
        Clear filters
      </button>
    </div>
  );
};

export default FilterForm;