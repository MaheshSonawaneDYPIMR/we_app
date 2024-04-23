import {
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
} from "../constants/user.constants";

export const getCurrentUserFailure = (error) => ({
  type: GET_CURRENT_USER_FAILURE,
  payload: error,
});

export const getCurrentUserRequest = () => ({
  type: GET_CURRENT_USER_REQUEST,
});

export const getCurrentUserSuccess = (user) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: user,
});
