import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AccountReducer from "./AccountReducer";
import ConversationReducer from "./ConversationReducer";
import MessageReducer from "./MessageReducer";

export default combineReducers({
  login: LoginReducer,
  account: AccountReducer,
  conversation: ConversationReducer,
  message: MessageReducer,
});
