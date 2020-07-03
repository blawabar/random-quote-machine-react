import React from "react";
import { useState, useEffect, useCallback } from "react";

import "./QuoteCard.scss";

import { QuoteSign } from "./QuoteSign";
import { QuoteSentence } from "./QuoteSentence";
import { QuoteAuthor } from "./QuoteAuthor";
import { QuoteTriangle } from "./QuoteTriangle";

import { getMediaQueryList, getViewType, getSentenceStyle } from "utils";

const QuoteCard = ({ content, author }) => {
  const mediaQueryList = getMediaQueryList();

  const [view, setView] = useState(() =>
    getViewType(mediaQueryList.matches, content)
  );

  const handleChangeView = useCallback(
    (mqle) => setView(getViewType(mqle.matches, content)),
    [content]
  );

  useEffect(() => {
    const mql = mediaQueryList;

    mql.addEventListener("change", handleChangeView);

    return () => mql.removeEventListener("change", handleChangeView);
  }, [handleChangeView, mediaQueryList]);

  return (
    <div className="quote-card">
      <QuoteSign />
      <section className="quote-card__body">
        <QuoteSentence style={getSentenceStyle(view)}>{content}</QuoteSentence>
        <QuoteAuthor>{author}</QuoteAuthor>
      </section>
      <QuoteTriangle />
    </div>
  );
};

export default QuoteCard;
