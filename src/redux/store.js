import { configureStore, combineReducers } from '@reduxjs/toolkit';
import items from './slice-items';
import filter from './slice-filter';

const contacts = combineReducers({
  items,
  filter,
});

export const store = configureStore({
  reducer: contacts,
  devTools: process.env.NODE_ENV !== 'production',
});
