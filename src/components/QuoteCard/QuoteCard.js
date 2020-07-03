import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

import "./QuoteCard.scss";

import { QuoteSign } from "./QuoteSign";
import { QuoteSentence } from "./QuoteSentence";
import { QuoteAuthor } from "./QuoteAuthor";
import { QuoteTriangle } from "./QuoteTriangle";

const QuoteCard = ({ content, author }) => {
  const mediaQueryList = useRef(
    matchMedia("screen and (max-width: 667px) and (max-height: 568px)")
  );

  // TODO: move into a separate utils file
  const getView = useCallback(
    (shouldBeShrinked) => {
      let view = "normal";

      if (content.length >= 225 && shouldBeShrinked) {
        view = "shrinked";
      }

      return view;
    },
    [content]
  );

  const [view, setView] = useState(() =>
    getView(mediaQueryList.current.matches)
  );

  const getSentenceStyle = useCallback(
    () =>
      view === "shrinked" ? { fontSize: "16px", marginBottom: "10px" } : null,
    [view]
  );

  // TODO: move into a separate utils file
  const handleChangeView = useCallback(
    (mqle) => setView(getView(mqle.matches)),
    [getView]
  );

  useEffect(() => {
    const mql = mediaQueryList.current;

    mql.addEventListener("change", handleChangeView);

    return () => mql.removeEventListener("change", handleChangeView);
  }, [handleChangeView]);

  // TODO: maybe it should be converted into a separate components
  return (
    <div className="quote-card">
      <QuoteSign />
      <section className="quote-card__body">
        <QuoteSentence style={getSentenceStyle()}>{content}</QuoteSentence>
        <QuoteAuthor>{author}</QuoteAuthor>
      </section>
      <QuoteTriangle />
    </div>
  );
};

export default QuoteCard;
