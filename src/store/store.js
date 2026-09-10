import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/campersSlice.js';
import filtersReducer from './filters/filtersSlice.js';
import favouritesReducer from './favourites/favouritesSlice.js';
import camperDetailsReducer from './camperDetails/camperDetailsSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favourites: favouritesReducer,
    camperDetails: camperDetailsReducer,
  },
});