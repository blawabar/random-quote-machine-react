import React from "react";

import PropTypes from "prop-types";

import "./QuoteAuthor.scss";

const QuoteAuthor = ({ children }) => {
  return <p className="quote-author">{children}</p>;
};

QuoteAuthor.propTypes = {
  children: PropTypes.string.isRequired,
};

export default QuoteAuthor;
