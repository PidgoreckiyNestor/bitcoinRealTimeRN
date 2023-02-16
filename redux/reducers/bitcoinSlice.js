import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import bitcoin from '../../services/bitcoin';
import formatter from "../../utils/getCurrentTime";

const initialState = {
  history: [],
  ascending: true,
  intervalOfSearch: 1,
  limit: 10,
  offset: 0,
};

export const getBitcoinLatest = createAsyncThunk(
  'bitcoin/getBitcoinLatest',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await bitcoin.getBitcoinLatest();
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
      if (state.data.length >= state.offset){
        state.offset = state.offset + state.limit;

      }
    },
    prevPage(state) {
      if (!(state.offset < state.limit)) {
        state.offset -= state.limit;
      }
    },
    toggleFilter(state) {
      state.ascending = !state.ascending;
    },
    changeIntervalOfUpdate(state, action) {
      state.intervalOfSearch = action.payload
    },
    clearHistory(state) {
      state.history = []
      state.offset = 0
    }
  },
  extraReducers: {
    [getBitcoinLatest.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBitcoinLatest.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.history = [...state.history, [formatter(new Date), payload.data['1'].quote.USD.price]];
      state.error = null;
    },
    [getBitcoinLatest.rejected]: (state) => {
      state.loading = false;
    },
  },
});


export const {nextPage, prevPage, changeIntervalOfUpdate, clearHistory, toggleFilter} = bitcoinSlice.actions
export default bitcoinSlice.reducer;
