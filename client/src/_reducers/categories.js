import { GET_ALL_CATEGORIES, GET_ALL_EVENTS_BYCATEGORIES } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_CATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: false        
      };
      case `${GET_ALL_CATEGORIES}_FULFILLED`:
        console.log('ini actioooooooooooooooonnnnnnnn----------',action.payload.data[0].name);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
      case `${GET_ALL_CATEGORIES}_REJECTED`:
    return {
      ...state
    };

    case GET_ALL_EVENTS_BYCATEGORIES:
      return {
        ...state,
        isLoading: false
      };
  default:
    return state;
  }
};