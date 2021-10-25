import { combineReducers } from "redux";
import { contactsReducer } from "./reducer";

/**
 * Root Reducer which combines all the reducers used
 * 
 */
const rootReducer = combineReducers({
   contactsReducer

});

export default rootReducer;
