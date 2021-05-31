import { ADD_ACCOUNT } from "../../Constants/ReduxType";

export const addAccount = (payload) => ({
  type: ADD_ACCOUNT,
  payload,
});
