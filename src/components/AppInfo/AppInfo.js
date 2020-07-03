import React from "react";

import PropTypes from "prop-types";

import "./AppInfo.scss";

const AppInfo = ({ title, message, isError }) => {
  return (
    <div
      className={isError ? "app-info app-info--is-showing-error" : "app-info"}
    >
      <h1 className="app-info__title">{title}</h1>
      <p className="app-info__details">{message}</p>
    </div>
  );
};

AppInfo.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

export default AppInfo;
