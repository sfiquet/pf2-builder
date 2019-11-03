import React from 'react';
import Heading from '../UI/Heading/Heading';

const ProfileEntry = ({ level, content, className }) => {
  if (!content){
    return null;
  }
  const componentClass = "ProfileEntry";
  const classes = className ? `${componentClass} ${className}` : componentClass;

  return (
    <div className={classes}>
      <Heading className="ProfileEntry-title d-inline" level={level}>{content.title}</Heading>
      <span className="ProfileEntry-text pl-1">{content.text}</span>
    </div>
)};

export default ProfileEntry;