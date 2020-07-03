import { useEffect, useReducer, useRef } from "react";

import { ActionTypes } from "data/constants";
import { INITIAL_STATE, quoteReducer } from "data/reducer";

const useQuoteFetcher = (deps) => {
  const [state, dispatch] = useReducer(quoteReducer, INITIAL_STATE);

  const API = useRef("https://api.quotable.io/random");

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getRandomQuote = async () => {
      try {
        dispatch({ type: ActionTypes.GET_QUOTE_REQUEST });
        const response = await fetch(API.current, { signal });

        if (response.ok) {
          const data = await response.json();
          dispatch({ type: ActionTypes.GET_QUOTE_SUCCESS, payload: data });
        } else {
          const error = await response.json();
          dispatch({ type: ActionTypes.GET_QUOTE_ERROR, payload: error });
        }
      } catch (error) {
        dispatch({ type: ActionTypes.GET_QUOTE_ERROR, payload: error });
      }
    };

    getRandomQuote();

    return () => abortController.abort();
  }, deps);

  return state;
};

export default useQuoteFetcher;
