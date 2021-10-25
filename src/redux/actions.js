import axios from "axios";

export const GET_ALL_CONTACTS = "GET_ALL_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";

export const _URL_TRACKER = "http://localhost:8080/covidtrack";
export const axiosInstance = axios.create();


/**
 * Action to get all the contacts from server
 * 
 */
export const getAllContacts = () => {
  return async (dispatch) => {
    let url = _URL_TRACKER + "/getall/" + localStorage.getItem('userId')

    await axiosInstance.get(url).then(function (response) {
      dispatch({
        type: GET_ALL_CONTACTS,
        payload: response.data,
      });
    }).catch(function (error) {
      console.log('API Error');
      dispatch({
        type: GET_ALL_CONTACTS,
        payload: error,
      });
    });

  };
};

/**
 * Action to add/update primary contacts
 * 
 */
export const addContact = (payload, type) => {
  return async (dispatch) => {
    let url = _URL_TRACKER + "/" + type
    if (type == "update") {
      await axiosInstance.put(url, payload).then(function (response) {
        dispatch({
          type: ADD_CONTACT,
          payload: response,
        });
        dispatch(getAllContacts())
      }).catch(function (error) {
        console.log('API Error');
        dispatch({
          type: ADD_CONTACT,
          payload: error,
        });
      });
    }
    else {
      await axiosInstance.post(url, payload).then(function (response) {
        dispatch({
          type: ADD_CONTACT,
          payload: response,
        });
        dispatch(getAllContacts())
      }).catch(function (error) {
        console.log('API Error');
        dispatch({
          type: ADD_CONTACT,
          payload: error,
        });
      });
    }

  };
};

/**
 * Action to clear success response
 * 
 */
export const clearSuccess = () => {
  return async (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {},
    });
  }
}
