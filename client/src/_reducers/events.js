import { GET_STARTTIME, GET_AN_EVENT, POST_NEW_EVENT } from "../config/constants";

const initialState = {
  data: [],
  singleEvent:[],
  isLoading: false
};

export const eventToday = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_STARTTIME}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_STARTTIME}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_STARTTIME}_REJECTED`:
      return {
        state,
        isLoading:false
      };
      
  default:
    return state;
  }
};

export const eventOne = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AN_EVENT}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_AN_EVENT}_FULFILLED`:
      return {
        ...state,
        singleEvent : action.payload.data,
        isLoading: false
      };
    case `${GET_AN_EVENT}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    
  default:
    return state;
  }
};

export const eventCreate = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_NEW_EVENT}_PENDING`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case `${POST_NEW_EVENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case `${POST_NEW_EVENT}_REJECTED`:
      return {
        ...state,
        isLoading:false
      };

  default:
    return state;
  }
};
