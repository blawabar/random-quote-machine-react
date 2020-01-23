import React from "react";
import { useState } from "react";

import "./QuoteHolder.scss";

import QuoteCard from "./QuoteCard";
import useQuoteFetcher from "../hooks/useQuoteFetcher";

const QuoteHolder = () => {
  const [flag, toggleFlag] = useState(false);

  const { isLoading, data, error } = useQuoteFetcher([flag]);

  const renderButton = () => {
    const text = isLoading || data ? "Get new quote" : "Try again";

    return (
      <button
        onClick={() => toggleFlag(!flag)}
        className="quote-holder__fetch-btn"
        disabled={isLoading}
      >
        {text}
      </button>
    );
  };

  const renderSubContent = () => {
    let content = null;

    if (data) {
      content = <QuoteCard {...data} />;
    } else if (error) {
      content = (
        <h1 className="quote-holder__error-msg">Something went wrong.</h1>
      );
    } else if (isLoading) {
      content = (
        <h1 className="quote-holder__loading-info">Loading new quote...</h1>
      );
    }

    return content;
  };

  return (
    <div className="quote-holder">
      {renderSubContent()}
      {renderButton()}
    </div>
  );
};

export default QuoteHolder;
