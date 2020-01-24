import React from "react";

import "./QuoteCard.scss";

const QuoteCard = ({ content, author }) => {
  const computeFontSizeStyle = () => {
    const mediaQuerList = matchMedia("screen and (max-width: 640px");
    let style = null;

    if (content.length >= 225 && mediaQuerList.matches) {
      style = { fontSize: "16px" };
    }

    return style;
  };

  return (
    <div className="quote-card">
      <section className="quote-card__body">
        <p className="quote-card__sentence" style={computeFontSizeStyle()}>
          {content}
        </p>
        <p className="quote-card__author-name">{author}</p>
      </section>
      <div className="quote-card__triangle"></div>
    </div>
  );
};

export default QuoteCard;
