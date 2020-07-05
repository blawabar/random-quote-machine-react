import React, { createContext, useReducer } from "react";

import PropTypes from "prop-types";

import { INITIAL_STATE, quoteReducer } from "data/reducer";
import { getRandomQuote } from "data/actions";

export const QuoteContext = createContext({});

const { Provider } = QuoteContext;

export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, INITIAL_STATE);

  return (
    <Provider
      value={{ state, actions: { getRandomQuote: getRandomQuote(dispatch) } }}
    >
      {children}
    </Provider>
  );
};

QuoteProvider.propTypes = { children: PropTypes.element.isRequired };
