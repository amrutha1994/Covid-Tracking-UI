import {
  ADD_CONTACT, GET_ALL_CONTACTS
} from "./actions";



/* Reducer function to get all contacts from server
* 
*/
export function contactsReducer(state, action) {
  if (!state) state = {}
  const { type, payload } = action
  if (type == GET_ALL_CONTACTS) {
    return {
      ...state,
      allContacts: payload
    }
  }
  else if (type == ADD_CONTACT) {
    return {
      ...state,
      isAdded: payload
    }
  }
  else {
    return state
  }
}