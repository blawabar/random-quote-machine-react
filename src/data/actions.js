import { ActionTypes, API } from "data/constants";

const { GET_QUOTE_REQUEST, GET_QUOTE_SUCCESS, GET_QUOTE_ERROR } = ActionTypes;

export const getRandomQuote = (dispatch) => async () => {
  try {
    dispatch({ type: GET_QUOTE_REQUEST });
    const response = await fetch(API);

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_QUOTE_SUCCESS, payload: data });
    } else {
      const error = await response.json();
      dispatch({ type: GET_QUOTE_ERROR, payload: error });
    }
  } catch (error) {
    dispatch({ type: GET_QUOTE_ERROR, payload: error });
  }
};
