import React from "react";

import "./QuoteCard.scss";

const QuoteCard = ({ content, author }) => {
  return (
    <div className="quote-card">
      <section className="quote-card__body">
        <p className="quote-card__sentence">{content}</p>
      </section>
      <section className="quote-card__info">
        <p className="quote-card__author-name">{author}</p>
      </section>
      <div className="quote-card__triangle"></div>
    </div>
  );
};

export default QuoteCard;
