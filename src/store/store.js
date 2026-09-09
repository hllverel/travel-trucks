import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/campersSlice.js';
import filtersReducer from './filters/filtersSlice.js';
import favouritesReducer from './favourites/favouritesSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favouritesReducer,
  },
});