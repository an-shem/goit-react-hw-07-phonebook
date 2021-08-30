import * as contactsApi from '../services/api';
import * as contactsActions from '../redux/contactsActions';

export const fetchAllContacts = () => async dispatch => {
  dispatch(contactsActions.fetchAllContactsRequest());

  try {
    const allContacts = await contactsApi.getAllContacts();
    dispatch(contactsActions.fetchAllContactsSuccess(allContacts));
  } catch (error) {
    dispatch(contactsActions.fetchAllContactsError(error));
  }
};

export const setContactApi = contactData => async dispatch => {
  dispatch(contactsActions.setContactRequest());
  try {
    const newContact = await contactsApi.addContact(contactData);
    dispatch(contactsActions.setContactSuccess(newContact));
  } catch (error) {
    dispatch(contactsActions.setContactError(error));
  }
};

export const deleteContactApi = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    const idRemoteContact = await contactsApi.deleteContact(contactId);
    dispatch(contactsActions.deleteContactSuccess(idRemoteContact));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};
