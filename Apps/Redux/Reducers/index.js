import { combineReducers } from "redux";

// reducers
import LoginReducer from "./LoginReducer";

export default combineReducers({
  login: LoginReducer,
});
