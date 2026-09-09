export const selectAllCampers = (state) => state.campers.items;
export const selectCampersStatus = (state) => state.campers.status;
export const selectCampersError = (state) => state.campers.error;
export const selectVisibleCount = (state) => state.campers.visibleCount;

export const selectFilteredCampers = (state) => {
  const campers = state.campers.items;
  const { location, form, engine, transmission, features } = state.filters;

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
};

export const selectVisibleCampers = (state) => {
  const filtered = selectFilteredCampers(state);
  const visibleCount = selectVisibleCount(state);
  return filtered.slice(0, visibleCount);
};

export const selectHasMore = (state) => {
  const filtered = selectFilteredCampers(state);
  const visibleCount = selectVisibleCount(state);
  return visibleCount < filtered.length;
};