import React from "react";

import PropTypes from "prop-types";

import "./Link.scss";

import { isUrl } from "utils";

const Link = ({ url, name }) => (
  <a className="link" href={url} target="_blank" rel="noopener noreferrer">
    {name}
  </a>
);

Link.propTypes = {
  url: isUrl,
  name: PropTypes.string.isRequired,
};

export default Link;
