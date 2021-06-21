import { takeEvery } from "redux-saga/effects";

// types
import * as ActionTypes from "../../Constants";

// sagas
import { loginSaga } from "./LoginSaga";

function* rootSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginSaga);
}

export default rootSaga;
