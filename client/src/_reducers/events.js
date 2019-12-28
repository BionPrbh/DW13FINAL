import { GET_STARTTIME, GET_AN_EVENT, POST_NEW_EVENT } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case GET_STARTTIME:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case GET_AN_EVENT:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case POST_NEW_EVENT:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
  default:
    return state;
  }
};