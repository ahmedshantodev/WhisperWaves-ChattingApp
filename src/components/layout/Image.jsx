import React from "react";

const Image = ({ onClick, imageLink, altText, className }) => {
  return (
    <img
      onClick={onClick}
      src={imageLink}
      alt={altText}
      className={className}
    />
  );
};

export default Image;
