import {
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,

  POST_UPDATE_FAILURE,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
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

export const postUpdateFailure = (error) => ({
  type: POST_UPDATE_FAILURE,
  payload: error,
});

export const postUpdateRequest = () => ({
  type: POST_UPDATE_REQUEST,
});

export const postUpdateSuccess = (postMsg , postPic) => ({
  type: POST_UPDATE_SUCCESS,
  payload:{postMsg, postPic},
});
