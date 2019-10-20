import React, {Fragment} from 'react';

function MonsterProfile(props){
  return (
    <Fragment>
      <div className="d-flex justify-content-between text-uppercase h3 border-bottom border-dark">
        <div>Monster</div>
        <div>Level</div>
      </div>
      <div className="border-bottom border-dark">
        <div>Traits</div>
        <div>Perception</div>
        <div>Languages</div>
        <div>Skills</div>
        <div>Ability Modifiers</div>
        <div>Items</div>
        <div>Interaction Abilities</div>
      </div>
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