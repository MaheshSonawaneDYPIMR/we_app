import { takeEvery, put, takeLatest } from "redux-saga/effects";
import { Axios } from "axios";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../constants/user.constants";
import { loginFailure, loginSuccess } from "../actions/user.actions";

function* loginUser(action) {
  try {
    console.log("login SAGA");
    const response = yield Axios.post(`${API_URL}/login`, action.payload);
    console.log("login API response:", response);
    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log("login saga error:", error);
    yield put(loginFailure(error.message));
  }
}


function* registerUser(action) {
    try {
        console.log("register saga");
        const response = yield Axios.post(`${API_URL}/register`, action.payload);
        console.log("register API response:", response);
        yield put(loginSuccess(response.data));
    } catch (error) {
        console.log("register user error:", error);
        yield put(loginFailure(error.message));
    }
}

//watchers

export function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}