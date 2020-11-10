import React from "react";
import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherFormProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormProps}
      />
      {label ? (
        <label
          className={`${
            otherFormProps.value.length ? "shirnk" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;