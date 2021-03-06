import { ViewTypes } from "data/constants";

export const isUrl = function (props, propName, componentName) {
  const regex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop '${propName}' passed to '${componentName}'. Expected a valid url address.`
    );
  }
};

export const getMediaQueryList = () =>
  matchMedia("screen and (max-width: 667px) and (max-height: 568px)");

export const getViewType = (shouldBeShrinked, content) => {
  let view = ViewTypes.NORMAL;

  if (content.length >= 155 && shouldBeShrinked) {
    view = ViewTypes.SHRINKED;
  }

  return view;
};

export const getSentenceStyle = (view) =>
  view === ViewTypes.SHRINKED
    ? { fontSize: "16px", marginBottom: "10px" }
    : null;
