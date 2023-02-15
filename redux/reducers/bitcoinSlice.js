import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bitcoin from '../../services/bitcoin';

const initialState = {
  history: [],
  ascending: true,
  intervalOfSearch: 1,
  limit: 10,
  offset: 0,
};

export const getBitcoinLatest = createAsyncThunk(
  'bitcoin/getBitcoinLatest',
  async (_,{ rejectWithValue }) => {
    try {
      const { data } = await bitcoin.getBitcoinLatest();
      console.log({ data });
      return data;
    } catch (error) {
      console.log(error);
      console.log(JSON.stringify(error));
      return rejectWithValue(error.response);
    }
  },
);

const bitcoinSlice = createSlice({
  name: 'bitcoin',
  initialState,
  reducers: {
    nextPage(state) {
      state.offset += state.limit;
    },
    prevPage(state) {
      if (!(state.offset < state.limit)) {
        state.offset -= state.limit;
      }
    },
    toggleFilter(state) {
      state.ascending = !state.ascending;
    },
  },
  extraReducers: {
    [getBitcoinLatest.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBitcoinLatest.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.count = payload.count;
      // state.next = payload.next;
      // state.previous = payload.previous;
      // state.results = payload.results;
      state.error = null;
    },
    [getBitcoinLatest.rejected]: (state, { payload }) => {
      state.loading = false;
      // state.error = payload.status;
    },
  },
});

export default bitcoinSlice.reducer;
