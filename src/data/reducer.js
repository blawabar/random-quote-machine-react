import { ActionTypes } from "data/constants";

const { GET_QUOTE_REQUEST, GET_QUOTE_SUCCESS, GET_QUOTE_ERROR } = ActionTypes;

export const INITIAL_STATE = {
  data: null,
  error: null,
  isLoading: false,
};

export const quoteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_QUOTE_REQUEST:
      return { ...state, data: null, error: null, isLoading: true };
    case GET_QUOTE_SUCCESS:
      return { ...state, data: payload, error: null, isLoading: false };
    case GET_QUOTE_ERROR:
      return { ...state, data: null, error: payload, isLoading: false };
    default:
      return state;
  }
};
