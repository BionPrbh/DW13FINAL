import { LOGIN, REGISTER, GET_A_USER, GET_USER_FAVORITED } from "../config/constants";

const initialState = {
  data: [],
  favorited:[],
  token: '',
  isLoading: false
};

export const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case `${LOGIN}_FULFILLED`:
      
      localStorage.setItem('_AUTH_TOKEN', action.payload.data.token)
      window.location.href="http://localhost:3000"
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

  default:
    return state;
  }
}

export const userRegister = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case `${REGISTER}_FULFILLED`:
    return {
      ...state,
      data: action.payload.data,
      isLoading: false
    };
    case `${REGISTER}_REJECTED`:
    return {
      ...state,
      isLoading: false
    };
    
  default:
    return state;
  }
}

export const userOne = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_A_USER}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_A_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_A_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

  default:
    return state;
  }
}

export const userFavorited = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER_FAVORITED}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_USER_FAVORITED}_FULFILLED`:
      return {
        ...state,
        favorited: action.payload.data,
        isLoading: false
      };
    case `${GET_USER_FAVORITED}_REJECTED`:
      return {
        ...state,
        isLoading: false
      } ;

  default:
    return state;
  }
}