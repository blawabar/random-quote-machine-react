import React from "react";
import { useState } from "react";

import "./QuoteHolder.scss";

import { QuoteCard, AppInfo, Button } from "components";
import { useQuoteFetcher } from "hooks";

const QuoteHolder = () => {
  const [flag, toggleFlag] = useState(false);

  const { isLoading, data, error } = useQuoteFetcher([flag]);

  const renderButton = () => {
    let text = "";

    if (data) {
      text = "Get a new quote";
    } else if (error) {
      text = "Try again";
    }

    return <Button onClick={() => toggleFlag(!flag)}>{text}</Button>;
  };

  const renderSubContent = () => {
    let content = null;

    if (data) {
      content = <QuoteCard {...data} />;
    } else if (error) {
      content = (
        <AppInfo
          title={"Something went wrong."}
          message={error.message}
          isError
        />
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
    <div className="quote-holder">
      {renderSubContent()}
      {(data || error) && renderButton()}
    </div>
  );
};

export default QuoteHolder;
