import { POST_ORDER, PUT_ORDER, GET_APPROVED } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false
};

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case PUT_ORDER:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case GET_APPROVED:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
  default:
    return state;
  }
};