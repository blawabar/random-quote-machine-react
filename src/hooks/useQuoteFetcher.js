import { useEffect, useReducer } from "react";

class FetchState {
  static FETCH_INIT = "FETCH_INIT";
  static FETCH_SUCCESS = "FETCH_SUCCESS";
  static FETCH_ERROR = "FETCH_ERROR";
}

const reducerFunction = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FetchState.FETCH_INIT:
      return { ...state, data: null, error: null, isLoading: true };
    case FetchState.FETCH_DONE:
      return { ...state, data: payload, error: null, isLoading: false };
    case FetchState.FETCH_ERROR:
      return { ...state, data: null, error: payload, isLoading: false };
    default:
      return state;
  }
};

const API = "https://api.quotable.io/random";

const useQuoteFetcher = deps => {
  const [state, dispatch] = useReducer(reducerFunction, {
    data: null,
    error: null,
    isLoading: false
  });

  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        dispatch({ type: FetchState.FETCH_INIT });
        const response = await fetch(API);

        if (response.ok) {
          const data = await response.json();
          dispatch({ type: FetchState.FETCH_DONE, payload: data });
        } else {
          const error = await response.json();
          dispatch({ type: FetchState.FETCH_ERROR, payload: error });
        }
      } catch (error) {
        dispatch({ type: FetchState.FETCH_ERROR, payload: error });
      }
    };

    getRandomQuote();
  }, deps);

  return state;
};

export default useQuoteFetcher;
