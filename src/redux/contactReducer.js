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
  error,
});
export default contacts;
