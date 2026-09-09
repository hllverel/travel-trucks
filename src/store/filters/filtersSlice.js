import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  features: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    engine: '',
    transmission: '',
    features: [],
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      const index = state.features.indexOf(feature);

      if (index === -1) {
        state.features.push(feature);
      } else {
        state.features.splice(index, 1);
      }
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, toggleFeature, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;