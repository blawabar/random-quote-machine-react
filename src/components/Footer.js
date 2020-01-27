import React from "react";
import "./Footer.scss";

const quotableLink = "https://github.com/lukePeavey/quotable";
const apiName = "Random Quotes API";

const lukePeaveyLink = "https://github.com/lukePeavey";
const apiAuthorName = "Luke Peavey";

const Footer = () => {
  const generateLink = (addr, text) => (
    <a
      className="footer__external-link"
      href={addr}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );

  return (
    <div className="footer">
      <p className="footer__app-name">Random Quote Machine by Bart Krolak</p>
      <p className="footer__api-info">
        {generateLink(quotableLink, apiName)}
        {" by "}
        {generateLink(lukePeaveyLink, apiAuthorName)}
      </p>
    </div>
  );
};

export default Footer;
