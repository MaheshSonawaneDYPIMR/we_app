import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,

    LOGOUT,

    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,

   REFRESH_ACCESS_TOKEN_FAILURE,
   REFRESH_ACCESS_TOKEN_REQUEST,
   REFRESH_ACCESS_TOKEN_SUCCESS
  } from "../constants/user.constants.js";
  
  export const registerRequest = (email, username, password ) => ({
    type: REGISTER_REQUEST,
    payload: {email:email, username:username, password:password },
  });
  
  export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
  });
  
  export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });
  
  
  export const loginRequest = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: {email, password },
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });

  export const refreshTokenRequest = () => ({
    type:REFRESH_ACCESS_TOKEN_REQUEST,
  });

  export const refreshTokenSuccess = (token) => ({
    type: REFRESH_ACCESS_TOKEN_SUCCESS,
    payload: token,
  });

  export const refreshTokenFailure = (error) => ({
    type:REFRESH_ACCESS_TOKEN_FAILURE,
    payload: error,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });