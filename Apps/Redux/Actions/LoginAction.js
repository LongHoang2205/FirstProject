import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../Constants/ReduxType";

export const loginRequestAction = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccessAction = (username, password, payload) => ({
  type: LOGIN_SUCCESS,
  payload,
  username: "LongHoang",
  password: "123123",
});

export const loginFailureAction = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});
