import React from "react";

import PropTypes from "prop-types";

import "./QuoteSentence.scss";

const QuoteSentence = ({ children, style }) => {
  return (
    <p className="quote-sentence" style={style}>
      {children}
    </p>
  );
};

QuoteSentence.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

export default QuoteSentence;
