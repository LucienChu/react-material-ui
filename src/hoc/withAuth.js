import React from "react";
import PropTypes from "prop-types";

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {};

  return hocComponent;
};
