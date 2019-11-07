import React from 'react';

const Checkbox = ({label, checked, id, name, onChange}) => {
  if (!name || !onChange){
    return null;
  }
  const inputId = id ? id : name;
  const text = label ? label : name;

  return (
    <div className="Checkbox form-check">
      <input className="form-check-input" type="checkbox" name={name} id={inputId} 
        checked={checked} onChange={onChange} />
      <label className="form-check-label" htmlFor={inputId}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;