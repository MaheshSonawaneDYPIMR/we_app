import {
  GET_QUIZ_QUESTIONS_FAILURE,
  GET_QUIZ_QUESTIONS_REQUEST,
  GET_QUIZ_QUESTIONS_SUCCESS,
  SUBMIT_QUIZ_QUESTIONS_FAILURE,
  SUBMIT_QUIZ_QUESTIONS_REQUEST,
  SUBMIT_QUIZ_QUESTIONS_SUCCESS,
} from "../constants/quiz.constants.js";

const initialState = {
  questions: null,
  isLoading: false,
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_QUESTIONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_QUIZ_QUESTIONS_SUCCESS: {
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
        error: null,
      };
    }

    case GET_QUIZ_QUESTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case SUBMIT_QUIZ_QUESTIONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case SUBMIT_QUIZ_QUESTIONS_SUCCESS: {
      return {
        ...state,

        isLoading: false,
        error: null,
      };
    }
    case SUBMIT_QUIZ_QUESTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
        return state;
  }
};

export default quizReducer;