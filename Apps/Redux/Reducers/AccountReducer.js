import { ADD_ACCOUNT } from "../../Constants/ReduxType";

const initialState = {
  account: [
    {
      id: 1,
      name: "Jisoo",
      activity: "active",
    },
    {
      id: 2,
      name: "Songoku",
      activity: "2 hour ago",
    },
    {
      id: 3,
      name: "Hoang Vu Long",
      activity: "15 minute ago",
    },
    {
      id: 4,
      name: "GD",
      activity: "1 hour ago",
    },
  ],
};
export default function (login = initialState, action) {
  switch (action.type) {
    case ADD_ACCOUNT:
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
