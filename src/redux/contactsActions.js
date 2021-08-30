import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchAllContactsRequest = createAction(
  'contacts/fetchAllContactsRequest',
);
// fulfilled
export const fetchAllContactsSuccess = createAction(
  'contacts/fetchAllContactsSuccess',
);
//rejected
export const fetchAllContactsError = createAction(
  'contacts/fetchAllContactsError',
);

//
// pending
export const setContactRequest = createAction('contacts/setContactRequest');
// fulfilled
export const setContactSuccess = createAction('contacts/setContactSuccess');
//rejected
export const setContactError = createAction('contacts/setContactError');

//
// pending
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
// fulfilled
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
//rejected
export const deleteContactError = createAction('contacts/deleteContactError');
