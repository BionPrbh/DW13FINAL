import { GET_ALL_CATEGORIES, GET_ALL_EVENTS_BYCATEGORIES, GET_ONE_CATEGORY } from "../config/constants";

const initialState = {
  single:[],
  data: [],
  event:[],
  isLoading: false
};

export const category = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ONE_CATEGORY}_PENDING`:  
      return{
        ...state,
        isLoading: false
      }
    case `${GET_ONE_CATEGORY}_FULFILLED`:
      return{
        ...state,
        single: action.payload.data,
        isLoading: false
      }
    case `${GET_ONE_CATEGORY}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }
  
    default:
      return state
  }
}

export const categoriesAll = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_CATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: false        
      };
    case `${GET_ALL_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
    };
    case `${GET_ALL_CATEGORIES}_REJECTED`:
      return {
        ...state
      };

  default:
    return state;
  }
};

export const categoriesAllEvent = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_EVENTS_BYCATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_ALL_EVENTS_BYCATEGORIES}_FULFILLED`:
      return {
        ...state,
        event: action.payload.data,
        isLoading: false
      };
    case `${GET_ALL_EVENTS_BYCATEGORIES}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
  
    default:
      return state
  }
}