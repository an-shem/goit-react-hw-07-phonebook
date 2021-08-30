import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  setContactApi,
  deleteContactApi,
} from '../redux/contactsOperations';
import filter from '../redux/sliceFilter';

export const items = createReducer([], {
  [fetchAllContacts.fulfilled]: (_, { payload }) => payload,
  [setContactApi.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContactApi.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const isLoading = createReducer(false, {
  [fetchAllContacts.pending]: () => true,
  [fetchAllContacts.fulfilled]: () => false,
  [fetchAllContacts.rejected]: () => false,
  [setContactApi.pending]: () => true,
  [setContactApi.fulfilled]: () => false,
  [setContactApi.rejected]: () => false,
  [deleteContactApi.pending]: () => true,
  [deleteContactApi.fulfilled]: () => false,
  [deleteContactApi.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchAllContacts.rejected]: (_, { payload }) => payload,
  [setContactApi.rejected]: (_, { payload }) => payload,
  [deleteContactApi.rejected]: (_, { payload }) => payload,
  [fetchAllContacts.pending]: () => null,
  [setContactApi.pending]: () => null,
  [deleteContactApi.pending]: () => null,
});

const contacts = combineReducers({
  items,
  filter,
  isLoading,
  error,
});
export default contacts;
