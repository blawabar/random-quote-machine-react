import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

import "./QuoteCard.scss";

const QuoteCard = ({ content, author }) => {
  const mediaQueryList = useRef(
    matchMedia("screen and (max-width: 667px) and (max-height: 568px)")
  );

  const getView = useCallback(
    shouldBeShrinked => {
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

  const handleChangeView = useCallback(mqle => setView(getView(mqle.matches)), [
    getView
  ]);

  useEffect(() => {
    const mql = mediaQueryList.current;

    mql.addEventListener("change", handleChangeView);

    return () => mql.removeEventListener("change", handleChangeView);
  }, [handleChangeView]);

  return (
    <div className="quote-card">
      <img
        className="quote-card__quote-sign"
        alt="quote sign"
        src="quote.svg"
      />
      <section className="quote-card__body">
        <p className="quote-card__sentence" style={getSentenceStyle()}>
          {content}
        </p>
        <p className="quote-card__author-name">{author}</p>
      </section>
      <div className="quote-card__triangle"></div>
    </div>
  );
};

export default QuoteCard;
