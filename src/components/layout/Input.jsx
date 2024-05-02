import React from "react";

const Input = ({ ref, type, placeholder, onchange, className }) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      onChange={onchange}
      className={className}
    />
  );
};

export default Input;
