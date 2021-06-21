import { ADD_CONVERSATION } from "../../Constants/ReduxType";

export const addMessage = (payload) => ({
  type: ADD_CONVERSATION,
  payload,
});
