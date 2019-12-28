import { LOGIN, REGISTER, GET_A_USER, GET_USER_FAVORITED } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case REGISTER:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case GET_A_USER:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
          
    case GET_USER_FAVORITED:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
  default:
    return state;
  }
}