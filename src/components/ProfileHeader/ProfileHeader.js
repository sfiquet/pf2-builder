import React from 'react';

const ProfileHeader = ({name, level}) => (
  <div className="ProfileHeader d-flex justify-content-between text-uppercase h3 border-bottom border-dark">
    <div className="ProfileHeader-name">{name ? name : 'Monster'}</div>
    <div className="ProfileHeader-level">{isNaN(parseInt(level, 10)) ? 'Level' : `Creature ${level}`}</div>
  </div>
);

export default ProfileHeader;