import { ADD_MESSAGE } from "../../Constants/ReduxType";

const initialState = {
  conversation: [
    {
      id: 1,
      name: "Jisoo",
      message: "How your life is going?",
    },
    {
      id: 2,
      name: "Songoku",
      message: "Wow,that's awesome",
    },
    {
      id: 3,
      name: "Hoang Vu Long",
      message: "Bye bye",
    },
    {
      id: 4,
      name: "GD",
      message: "It's sunny day",
    },
  ],
};
export default function (message = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      // trước khi gọi request để lấy data mới thì
      // clear data cũ
      return {
        message,
      };
    default:
      return message;
  }
}
