import React from 'react';
import format from '../../lib/format';
import Heading from '../UI/Heading/Heading';
import ProfileEntry from '../ProfileEntry/ProfileEntry';

/*
  To add:
      <ProfileEntry level={nextLevel} content={{title: 'Items'}}/>
      <ProfileEntry level={nextLevel} content={{title: 'Interaction Abilities'}}/>
*/

const ProfileGeneral = ({level, monster}) => {
  const nextLevel = level ? level + 1 : level;
  const senses = monster && monster.senses && monster.senses.length ? `; ${monster.senses}` : '';
  const perceptionText = monster ? `${format(monster.perception)}${senses}` : '';
  const perception = {title: 'Perception', text: perceptionText };

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
  const alignmentTrait = monster && monster.alignment ? <li className="ProfileGeneral-traits-item alignment" key="alignment">{monster.alignment}</li> : null;
  const sizeTrait = monster && monster.size ? <li className="ProfileGeneral-traits-item size" key="size">{monster.size}</li> : null;
  let sortedTraits = monster && monster.traits ? [...monster.traits] : [];
  sortedTraits.sort();
  const regularTraits = sortedTraits.map(item => <li className="ProfileGeneral-traits-item" key={item}>{item}</li>);

  return (
    <section className="ProfileGeneral border-bottom border-dark">
      <Heading level={level} className="ProfileGeneral-heading sr-only">General Stats</Heading>
      <Heading level={nextLevel} className="ProfileGeneral-traitsheading sr-only">Traits</Heading>
      <ul className="ProfileGeneral-traits">
        {alignmentTrait}
        {sizeTrait}
        {regularTraits}
      </ul>
      <ProfileEntry className="ProfileGeneral-perception" level={nextLevel} content={perception} />
      {monster && monster.languages && monster.languages.length > 0 &&
        <ProfileEntry className="ProfileGeneral-languages" level={nextLevel} content={{title: 'Languages', text: monster.languages}} />
      }
      <ProfileEntry className="ProfileGeneral-skills" level={nextLevel} content={{title: 'Skills'}} />
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