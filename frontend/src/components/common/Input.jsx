import React from "react";
const Input = ({ placeholder, type, value, onChange, name,id }) => {
  return (
    <div className="">
     
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
