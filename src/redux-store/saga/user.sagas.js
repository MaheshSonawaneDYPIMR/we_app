import { takeEvery, put, takeLatest, call } from "redux-saga/effects";
import Axios from "axios";
import { GET_CURRENT_USER_REQUEST } from "../constants/user.constants";
import { getCurrentUserFailure,getCurrentUserSuccess, postUpdateFailure, postUpdateRequest, postUpdateSuccess } from "../actions/user.actions";
import AsyncStorage from "@react-native-async-storage/async-storage";


function* getCurrentUser(action) {
    try {
        console.log("getCurrentUser SAGA action payload:",action.payload);
        const response = yield Axios.get('https://weapp-backend.onrender.com/api/v1/user/current-user');
        if(response){
          console.log("user in getuser ",response.data.data.user);
          yield call(AsyncStorage.setItem, "user", JSON.stringify(response.data.data.user) );

          console.log("Async storage set successfully")
        }
        yield put(getCurrentUserSuccess(response.data.data));
    } catch (error) {
        console.log("getCurrentUser SAGA error:", error);
        yield put(getCurrentUserFailure(error.message));
    }
}

function* postUpdate(action) {
  try {
    console.log("postUpdate sagas action:", action.payload);
    const response = yield Axios.post(`https://weapp-backend.onrender.com/api/v1/post`,action.payload,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    console.log("postUpdate sagas response:", response.data);
    yield put(postUpdateSuccess());
  } catch (error) {
    console.log("postUpdate sagas response error:", error)
    yield put(postUpdateFailure(error.message));
  }
}

export default function* watchUser() {
  yield takeEvery(GET_CURRENT_USER_REQUEST, getCurrentUser);
}

export function* watchPostUpdate() {
  yield takeEvery("POST_UPDATE_REQUEST", postUpdate);
}