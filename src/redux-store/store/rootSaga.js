import { all } from "redux-saga/effects";
import { watchLoginUser, watchRegisterUser,wa } from "../saga/auth.sagas";
import {
  watchGetQuizQuestions,
  watchSubmitQuizQuestions,
} from "../saga/quiz.sagas";
import watchUser from "../saga/user.sagas";
export default function* rootsaga() {
  yield all([
    watchLoginUser(),
    watchRegisterUser(),
    watchGetQuizQuestions(),
    watchSubmitQuizQuestions(),
    watchUser()
  ]);
}
