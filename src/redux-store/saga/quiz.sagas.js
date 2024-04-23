import { takeEvery, put, takeLatest, call } from "redux-saga/effects";
import Axios from "axios";
import { GET_QUIZ_QUESTIONS_REQUEST,SUBMIT_QUIZ_QUESTIONS_REQUEST } from "../constants/quiz.constants";
import { getQuizQuestionsSuccess,getQuizQuestionsFailure,submitQuizQuestionsFailure,submitQuizQuestionsSuccess } from "../actions/quiz.actions";

function* getQuizQuestions(action) {
    try {
        const response = yield Axios.get('https://weapp-backend.onrender.com/api/v1/question')
        yield put(getQuizQuestionsSuccess(response.data.data));
    } catch (error) {
        yield put(getQuizQuestionsFailure(error.message));
    }
}

function* submitQuizQuestions(action) {
    try {
        console.log("i am here in submit question saga",action.payload);
        const response = yield Axios.post(`https://weapp-backend.onrender.com/api/v1/question/submit`,action.payload)
        yield put(submitQuizQuestionsSuccess(response.data));
    } catch (error) {
        console.log("submit question saga error:", error);
        yield put(submitQuizQuestionsFailure(error.message));
    }
}


//watchers
export function* watchGetQuizQuestions(){
    yield takeEvery(GET_QUIZ_QUESTIONS_REQUEST,getQuizQuestions)
}

export function* watchSubmitQuizQuestions(){
    yield takeEvery(SUBMIT_QUIZ_QUESTIONS_REQUEST,submitQuizQuestions)
}
