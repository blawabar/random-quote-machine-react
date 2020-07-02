import React from "react";
import { useState } from "react";

import "./QuoteHolder.scss";

import QuoteCard from "./QuoteCard";
import useQuoteFetcher from "../hooks/useQuoteFetcher";

const QuoteHolder = () => {
  const [flag, toggleFlag] = useState(false);

  const { isLoading, data, error } = useQuoteFetcher([flag]);

  // TODO: it should be moved into a separate component CardButton
  const renderButton = () => {
    let text = "";

    if (data) {
      text = "Get new quote";
    } else if (error) {
      text = "Try again";
    }

    return (
      <button
        onClick={() => toggleFlag(!flag)}
        className="quote-holder__fetch-btn"
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
      // TODO: it should be moved into a separate component ErrorMsg
      content = (
        <h1 className="quote-holder__error-msg">
          Something went wrong: {error.message}
        </h1>
      );
    } else if (isLoading) {
      // TODO: it should be moved into a separate component LoadingInfo
      content = (
        <h1 className="quote-holder__loading-info">Loading new quote...</h1>
      );
    }

    return content;
  };

  return (
    <div className="quote-holder">
      {renderSubContent()}
      {(data || error) && renderButton()}
    </div>
  );
};

export default QuoteHolder;
