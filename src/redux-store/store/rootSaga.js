import { all } from "redux-saga/effects";
import { watchLoginUser,watchRegisterUser } from "../saga/user.sagas";

export default function* rootsaga(){
    yield all([watchLoginUser(),watchRegisterUser()])
}

