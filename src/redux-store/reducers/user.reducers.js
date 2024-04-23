import {
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
} from "../constants/user.constants";

const initialState = {
    user: null,
    error: null,
    isLoading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER_REQUEST: {
            return {
               ...state,
                isLoading: true,
                error: null,
            };
        }
        case GET_CURRENT_USER_SUCCESS: {
            return {
               ...state,
                user: action.payload,
                isLoading: false,
                error: null,
            };
        }
        case GET_CURRENT_USER_FAILURE: {
            return {
               ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}


export default userReducer;