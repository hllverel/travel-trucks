import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../../api/campersApi';

export const fetchCampersThunk = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const data = await fetchCampers();
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  visibleCount: 4,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.visibleCount += 4;
    },
    resetVisibleCount: (state) => {
      state.visibleCount = 4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampersThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { loadMore, resetVisibleCount } = campersSlice.actions;
export default campersSlice.reducer;