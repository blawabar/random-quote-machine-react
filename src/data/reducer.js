import { ActionTypes } from "data/constants";

export const INITIAL_STATE = {
  data: null,
  error: null,
  isLoading: false,
};

export const quoteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.GET_QUOTE_REQUEST:
      return { ...state, data: null, error: null, isLoading: true };
    case ActionTypes.GET_QUOTE_SUCCESS:
      return { ...state, data: payload, error: null, isLoading: false };
    case ActionTypes.GET_QUOTE_ERROR:
      return { ...state, data: null, error: payload, isLoading: false };
    default:
      return state;
  }
};
