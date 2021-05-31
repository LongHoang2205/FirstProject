import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../Constants/ReduxType";

export default function (login = [], action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("login page", action.username);
      // trước khi gọi request để lấy data mới thì
      // clear data cũ
      return {
        login,
      };
    default:
      return login;
  }
}
