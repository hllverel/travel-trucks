import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCamperById } from '../../api/campersApi.js';

export const fetchCamperDetailsThunk = createAsyncThunk(
  'camperDetails/fetchCamperDetails',
  async (id, thunkAPI) => {
    try {
      const data = await fetchCamperById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  camper: null,
  status: 'idle',
  error: null,
};

const camperDetailsSlice = createSlice({
  name: 'camperDetails',
  initialState,
  reducers: {
    clearCamperDetails: (state) => {
      state.camper = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperDetailsThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCamperDetailsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.camper = action.payload;
      })
      .addCase(fetchCamperDetailsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearCamperDetails } = camperDetailsSlice.actions;
export default camperDetailsSlice.reducer;