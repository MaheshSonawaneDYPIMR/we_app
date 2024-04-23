import {
   GET_QUIZ_QUESTIONS_FAILURE,
   GET_QUIZ_QUESTIONS_REQUEST,
   GET_QUIZ_QUESTIONS_SUCCESS,

   SUBMIT_QUIZ_QUESTIONS_FAILURE,
   SUBMIT_QUIZ_QUESTIONS_REQUEST,
   SUBMIT_QUIZ_QUESTIONS_SUCCESS,
} from '../constants/quiz.constants.js'

export const getQuizQuestionsRequest = ()=>({
  type: GET_QUIZ_QUESTIONS_REQUEST,
})

export const getQuizQuestionsSuccess = (questions)=>({
  type: GET_QUIZ_QUESTIONS_SUCCESS,
  payload: questions,
})

export const getQuizQuestionsFailure = (error)=>({
  type: GET_QUIZ_QUESTIONS_FAILURE,
  payload: error,
})

export const submitQuizQuestionsRequest = (option, userDBKey)=>({
  type: SUBMIT_QUIZ_QUESTIONS_REQUEST,
  payload: { option,  userDBKey},
})

export const submitQuizQuestionsSuccess = ()=>({
  type: SUBMIT_QUIZ_QUESTIONS_SUCCESS,
 
})

export const submitQuizQuestionsFailure = (error)=>({
  type: SUBMIT_QUIZ_QUESTIONS_FAILURE,
  payload: error,
})
