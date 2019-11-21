import React, {Fragment} from 'react';
import MonsterBuilderForm from '../MonsterBuilderForm/MonsterBuilderForm';
import MonsterProfile from '../MonsterProfile/MonsterProfile';

const MonsterBuilder = ({monster, onChange}) => {
  if (!monster){
    return null;
  }

  const buildProfileMonster = monster => {
    // the MonsterProfile doesn't care about scales, only provide values
    
    // abilities
    const keyValuePairs = Object.entries(monster.abilities).map(([abilityKey, abilityObj]) => {
      return [abilityKey, abilityObj.value];
    });
    const abilities = Object.fromEntries(keyValuePairs);

    return {...monster, abilities: abilities};
  };

  return (
    <Fragment>
      <h2>Monster Builder</h2>
      <div className="row">
        <MonsterBuilderForm monster={monster} level={3} onChange={onChange} />
        <output form="monsterInput" className="col-12 col-md-6 d-block border rounded py-2 mb-2">
          <MonsterProfile monster={buildProfileMonster(monster)} level={3} />
        </output>
      </div>
    </Fragment>
  );
};

export default MonsterBuilder;