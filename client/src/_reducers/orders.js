import { POST_ORDER, PUT_ORDER, GET_ALL_PENDING, GET_TOBEPAID, GET_APPROVED } from "../config/constants";

const initialState = {
  data: [],
  tobepaid:[],
  pendingData:[],
  isLoading: false
};

export const orderCreate = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${POST_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
    };
    case `${POST_ORDER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    
  default:
    return state;
  }
};

export const orderPending = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_PENDING}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_ALL_PENDING}_FULFILLED`:
      return {
        ...state,
        pendingData: action.payload.data,
        isLoading: false
    };
    case `${GET_ALL_PENDING}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    
  default:
    return state;
  }
};

export const orderTobePaid = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TOBEPAID}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_TOBEPAID}_FULFILLED`:
      return {
        ...state,
        tobepaid: action.payload.data,
        isLoading: false
      };
    case `${GET_TOBEPAID}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

  default:
    return state;
  }
};

export const orderConfirmed = (state = initialState, action) => {
  switch (action.type) {
    case `${PUT_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${PUT_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case `${PUT_ORDER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

  default:
    return state;
  }
};

export const orderApproved = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_APPROVED}_PENDING`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_APPROVED}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_APPROVED}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };

  default:
    return state;
  }
};