import React, { useContext, useEffect } from "react";

import "./QuoteHolder.scss";

import { QuoteCard, AppInfo, Button } from "components";
import { QuoteContext } from "data/context";

const QuoteHolder = () => {
  const {
    state,
    actions: { getRandomQuote },
  } = useContext(QuoteContext);

  useEffect(() => {
    getRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = (state, handleAction) => {
    const { isLoading, data, error } = state;
    let content = null;

    if (data) {
      content = (
        <>
          <QuoteCard {...data} />
          <Button onClick={handleAction}>Get a new quote</Button>
        </>
      );
    } else if (error) {
      content = (
        <>
          <AppInfo
            title={"Something went wrong."}
            message={error.message}
            isError
          />
          <Button onClick={handleAction}>Try again</Button>
        </>
      );
    } else if (isLoading) {
      content = (
        <AppInfo
          title={"Loading new quote."}
          message={"Please wait for a while..."}
        />
      );
    }

    return content;
  };

  return (
    <div className="quote-holder">{renderContent(state, getRandomQuote)}</div>
  );
};

export default QuoteHolder;
