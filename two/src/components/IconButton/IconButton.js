import React from "react";
import PropType from "prop-types";
import "./IconButton.css";

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.PropType = {
  onClick: PropType.func,
  children: PropType.node,
  "aria-label": PropType.string.isRequired,
};
export default IconButton;
