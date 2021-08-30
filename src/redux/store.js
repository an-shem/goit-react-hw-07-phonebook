import { configureStore } from '@reduxjs/toolkit';
import contacts from '../redux/contactReducer';

export const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
