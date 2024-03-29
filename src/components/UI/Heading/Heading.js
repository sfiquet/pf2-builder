import React from 'react';

const Heading = ({ level, children, className }) => {
  const defaultLevel = 2;
  const safeLevel = level >= 1 ? (level <= 6 ? level : 6) : defaultLevel;
  const H = 'h' + safeLevel;

  return (
  <H className={className}>{children}</H>
)};

export default Heading;