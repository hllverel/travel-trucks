import { createSelector } from '@reduxjs/toolkit';

export const selectAllCampers = (state) => state.campers.items;
export const selectCampersStatus = (state) => state.campers.status;
export const selectCampersError = (state) => state.campers.error;
export const selectVisibleCount = (state) => state.campers.visibleCount;
export const selectFilters = (state) => state.filters;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectFilters],
  (campers, filters) => {
    const { location, form, engine, transmission, features } = filters;

    return campers.filter((camper) => {
      if (location && !camper.location.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }
      if (form && camper.form !== form) {
        return false;
      }
      if (engine && camper.engine !== engine) {
        return false;
      }
      if (transmission && camper.transmission !== transmission) {
        return false;
      }
      if (features.length > 0 && !features.every((feature) => camper[feature] === true)) {
        return false;
      }
      return true;
    });
  }
);

export const selectVisibleCampers = createSelector(
  [selectFilteredCampers, selectVisibleCount],
  (filtered, visibleCount) => filtered.slice(0, visibleCount)
);

export const selectHasMore = createSelector(
  [selectFilteredCampers, selectVisibleCount],
  (filtered, visibleCount) => visibleCount < filtered.length
);