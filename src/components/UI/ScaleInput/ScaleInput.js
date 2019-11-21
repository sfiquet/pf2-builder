import React from 'react';

const ScaleInput = ({title, scales, scaleValue, value, onChange}) => {
  if (typeof title !== 'string' || 
      typeof value !== 'number' || 
      !Array.isArray(scales) ||
      scales.length === 0) {
    return null;
  }

  const scaleOptions = [...scales, 'Manual'].map(item => <option key={item}>{item}</option>);

  return (
    <fieldset className="ScaleInput">
      <div className="form-group row justify-content-start">
        <legend className="MonsterBuilder-legend col-form-label col-3">{title}</legend>
        <select className="form-control col" value={scaleValue} name={`${title}_scale`} onChange={onChange}>
          {scaleOptions}
        </select>
        <div className="col-3">
          {scaleValue === 'Manual' ? 
            <input type="number" className="form-control" value={value} name={title} onChange={onChange} /> :
            <input type="number" className="form-control" value={value} name={title} readOnly />
          }
        </div>
      </div>
    </fieldset>
  );
};

export default ScaleInput;