import { takeEvery, put, takeLatest, call } from "redux-saga/effects";
import Axios from "axios";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../constants/auth.constants";
import {
  loginFailure,
  loginSuccess,
  refreshTokenFailure,
} from "../actions/auth.actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFRESH_ACCESS_TOKEN_REQUEST } from "../constants/auth.constants";


function* loginUser(action) {
  try {
    console.log("login SAGA action payload:",action.payload);
    const response = yield Axios.post(
      `https://weapp-backend.onrender.com/api/v1/user/login`,
      action.payload
    );
    console.log("login API response:", response.data.data.accessToken);
    if (response) {
      console.log("user in asyn storage after login",response.data.data.user);
      const keyValues = [
       ["accessToken", response.data.data.accessToken],
        ["loginTime", Date.now().toString()],
        ["user", JSON.stringify(response.data.data.user) ]
      ];
      yield call(AsyncStorage.multiSet, keyValues);
      console.log(
        "AsyncStorage accessToken from login:",
        yield AsyncStorage.multiGet(["user","accessToken"])
      );
    }

    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log("login saga error:", error);
    yield put(loginFailure(error.message));
  }
}

function* registerUser(action) {
  try {
    console.log("register saga");
    const response = yield Axios.post(
      `https://weapp-backend.onrender.com/api/v1/user/register`,
      action.payload
    );
    console.log("register API response:", response.data);

    if (response.data.data.email) {
      yield call(loginUser, {
        payload: {
          username: response.data.data.username,
          password: action.payload.password,
        },
      });
    }

    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log("register user error:", error);
    yield put(loginFailure(error.message));
  }
}

function* refreshAccessToken() {
  try {
    const refrshToken = AsyncStorage.getItem("refreshToken");
    if (!refrshToken) throw new Error("Refresh token not found");

    const response = yield Axios.post(
      `https://weapp-backend.onrender.com/api/v1/user/refreshtoken`,
      { refreshToken: refrshToken }
    );
    if (response) {
      const keyValues = [
        ["accessToken", response.data.data.accessToken],
        ["refreshToken", response.data.data.refreshToken],
      ];
      yield call(AsyncStorage.multiSet, keyValues);
      console.log(
        "AsyncStorage accessToken from login:",
        yield AsyncStorage.multiGet(["accessToken", "refreshToken"])
      );
      yield put(loginSuccess(response.data.data.user));
    }
  } catch (error) {
    yield put(refreshTokenFailure(error.message));
  }
}

//watchers

export function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}

export function* watchRefreshAccessToken() {
  yield takeEvery(REFRESH_ACCESS_TOKEN_REQUEST, refreshAccessToken);
}
