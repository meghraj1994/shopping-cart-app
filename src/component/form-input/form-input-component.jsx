import React from 'react';

import './form-input-style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  //this is for bubble up to bind the input and label together
  // { } down input is for label, if label is not there it will be null
  // label has alway  have class form-label-input but when user type something
  //it will also have 'shrink'property
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
