import React from 'react';
import format from '../../lib/format';
import Heading from '../UI/Heading/Heading';
import ProfileEntry from '../ProfileEntry/ProfileEntry';

/*
  To add:
      <ProfileEntry level={nextLevel} content={{title: 'Languages'}}/>
      <ProfileEntry level={nextLevel} content={{title: 'Items'}}/>
      <ProfileEntry level={nextLevel} content={{title: 'Interaction Abilities'}}/>
*/

const ProfileGeneral = ({level, monster}) => {
  const nextLevel = level ? level + 1 : level;
  const perception = {title: 'Perception', text: monster ? format(monster.perception) : undefined };

  const abilities = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'].map(item => {
    let content = monster && monster.abilities ? 
      {title: item, text: format(monster.abilities[item])} : 
      {title: item };
    return (
      <li className="MonsterProfile-list-item" key={item}>
        <ProfileEntry className="d-inline" level={nextLevel+1} content={content}/>
      </li>
    );
  });

  return (
    <section className="ProfileGeneral border-bottom border-dark">
      <Heading level={level} className="ProfileGeneral-heading sr-only">General Stats</Heading>
      <Heading level={nextLevel} className="ProfileGeneral-traits">Traits</Heading>
      <ProfileEntry className="ProfileGeneral-perception" level={nextLevel} content={perception}/>
      <ProfileEntry className="ProfileGeneral-skills" level={nextLevel} content={{title: 'Skills'}}/>
      <div className="ProfileGeneral-abilities">
        <Heading level={nextLevel} className="sr-only">Ability Modifiers</Heading>
        <ul className="MonsterProfile-list">
          {abilities}
        </ul>
      </div>
    </section>
  );
};

export default ProfileGeneral;