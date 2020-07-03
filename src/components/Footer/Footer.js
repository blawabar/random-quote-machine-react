import React, { useRef } from "react";
import "./Footer.scss";

import { Link } from "components";

const Footer = () => {
  const linksData = useRef([
    {
      url: "https://github.com/lukePeavey/quotable",
      name: "Random Quotes API",
    },
    { url: "https://github.com/lukePeavey", name: "Luke Peavey" },
  ]);

  return (
    <div className="footer">
      <p className="footer__app-name">Random Quote Machine by Bart Krolak</p>
      <p className="footer__api-info">
        <Link {...linksData.current[0]} />
        {" by "}
        <Link {...linksData.current[1]} />
      </p>
    </div>
  );
};

export default Footer;
