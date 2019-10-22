import React, {Fragment} from 'react';
import ProfileEntry from '../ProfileEntry/ProfileEntry';
import Heading from '../Heading/Heading';

function MonsterProfile({level, monster}){
  const nextLevel = level + 1;
  // temporary
  const abilities = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'].map(item => ({
    name: item,
    value: 10,
  }));
  const abilityMods = abilities.map(item =>
    <li className="MonsterProfile-list-item" key={item.name}>
      <ProfileEntry className="d-inline" level={nextLevel+1} content={{title: item.name, text: `${item.value}` }}/>
    </li>
  );
  return (
    <Fragment>
      <div className="d-flex justify-content-between text-uppercase h3 border-bottom border-dark">
        <div>Monster</div>
        <div>Level</div>
      </div>
      <section className="border-bottom border-dark">
        <Heading level={level} className="sr-only">General Stats</Heading>
        <div>Traits</div>
        <ProfileEntry level={nextLevel} content={{title: 'Perception'}}/>
        <ProfileEntry level={nextLevel} content={{title: 'Languages'}}/>
        <ProfileEntry level={nextLevel} content={{title: 'Skills'}}/>
        <Heading level={nextLevel} className="sr-only">Ability Modifiers</Heading>
        <ul className="MonsterProfile-list">
          {abilityMods}
        </ul>
        <ProfileEntry level={nextLevel} content={{title: 'Items'}}/>
        <ProfileEntry level={nextLevel} content={{title: 'Interaction Abilities'}}/>
      </section>
      <div className="border-bottom border-dark">
        <div>AC; Fort, Ref, Will</div>
        <div>HP; Immunities; Weaknesses; Resistances</div>
        <div>Automatic Abilities</div>
        <div>Reactive Abilities</div>
      </div>
      <div>
        <div>Speed</div>
        <div>Melee</div>
        <div>Ranged</div>
        <div>Spells</div>
        <div>Innate Spells</div>
        <div>Focus Spells</div>
        <div>Rituals</div>
        <div>Offensive or Proactive Abilities</div>
      </div>
    </Fragment>
  );
}

export default MonsterProfile;