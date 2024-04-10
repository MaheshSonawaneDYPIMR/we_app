import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REFRESH_TOKEN_FAILURE,
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_SUCCESS,
    LOGIN_REQUEST,
  } from "../constants/user.constants.js";


const initialState = {
  user: null,
  error: null,
  isLoading: false,
  accessToken: null,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:{
      return {
       ...state,
        isLoading: true,
        error: null,
      };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }; 
      
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;