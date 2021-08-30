import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from '../redux/contactsActions';
import filter from '../redux/sliceFilter';

export const items = createReducer([], {
  [contactsActions.fetchAllContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.setContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const isLoading = createReducer(false, {
  [contactsActions.fetchAllContactsRequest]: () => true,
  [contactsActions.fetchAllContactsSuccess]: () => false,
  [contactsActions.fetchAllContactsError]: () => false,
  [contactsActions.setContactRequest]: () => true,
  [contactsActions.setContactSuccess]: () => false,
  [contactsActions.setContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export const error = createReducer(null, {
  [contactsActions.fetchAllContactsError]: (_, { payload }) => payload,
  [contactsActions.setContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
  [contactsActions.fetchAllContactsRequest]: () => null,
  [contactsActions.setContactRequest]: () => null,
  [contactsActions.deleteContactRequest]: () => null,
});

const contacts = combineReducers({
  items,
  filter,
  isLoading,
  error,
});
export default contacts;
