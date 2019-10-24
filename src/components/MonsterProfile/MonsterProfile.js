import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileGeneral from '../ProfileGeneral/ProfileGeneral';

function MonsterProfile({level, monster}){
  if (!monster){
    return null;
  }

  return (
    <div className="MonsterProfile">
      <ProfileHeader name={monster.name} level={monster.level} />
      <ProfileGeneral level={level} monster={monster} />
      <section className="ProfileDefense border-bottom border-dark">
        <div>AC; Fort, Ref, Will</div>
        <div>HP; Immunities; Weaknesses; Resistances</div>
        <div>Automatic Abilities</div>
        <div>Reactive Abilities</div>
      </section>
      <section className="ProfileOffense">
        <div>Speed</div>
        <div>Melee</div>
        <div>Ranged</div>
        <div>Spells</div>
        <div>Innate Spells</div>
        <div>Focus Spells</div>
        <div>Rituals</div>
        <div>Offensive or Proactive Abilities</div>
      </section>
    </div>
  );
}

export default MonsterProfile;