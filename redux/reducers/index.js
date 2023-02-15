import { combineReducers } from '@reduxjs/toolkit';
import bitcoinReducer from './bitcoinSlice';

const rootReducer = combineReducers({ bitcoin: bitcoinReducer });

export default rootReducer;
