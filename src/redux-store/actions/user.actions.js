import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
  } from "../constants/user.constants.js";
  
  export const registerRequest = (name, email, phone, password) => ({
    type: REGISTER_REQUEST,
    payload: {username ,email , password },
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
    payload: {username , email, password },
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });