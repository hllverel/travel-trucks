import { createSlice } from '@reduxjs/toolkit';

const loadFavouritesFromStorage = () => {
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadFavouritesFromStorage(),
};

const favouritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      const index = state.items.findIndex((item) => item.id === camper.id);

      if (index === -1) {
        state.items.push(camper);
      } else {
        state.items.splice(index, 1);
      }

      localStorage.setItem('favourites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;