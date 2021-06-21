import { combineReducers } from "redux";

// reducers
import LoginReducer from "./LoginReducer";
import ConversationReducer from "./ConversationReducer";
import MessageReducer from "./MessageReducer";

export default combineReducers({
  login: LoginReducer,
  conversation: ConversationReducer,
  message: MessageReducer,
});
