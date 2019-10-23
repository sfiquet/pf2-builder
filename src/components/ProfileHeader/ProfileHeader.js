import React from 'react';

const ProfileHeader = ({name, level}) => (
  <div className="ProfileHeader d-flex justify-content-between text-uppercase h3 border-bottom border-dark">
    <div className="ProfileHeader-name">{name ? name : 'Monster'}</div>
    <div className="ProfileHeader-level">{level !== undefined ? `Creature ${level}` : 'Level'}</div>
  </div>
);

export default ProfileHeader;