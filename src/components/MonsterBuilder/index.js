import React, {useReducer} from 'react';
import getOnChangeArgs from '../../lib/onchange';
import MonsterBuilder from './MonsterBuilder-component';
import {changeInput} from './actions';
import reducer from './MonsterBuilder-reducer';
import {getAllTraits} from './Traits-selectors';
import tables from '../../data/scaletables';

const mapPerceptionToProp  = (state, levelState) => {
  const value = state.scale === 'Manual' ? state.value : tables.getPerception(state.scale, levelState);
  return {...state, value};
};

const mapAbilitiesToProp = (abilitiesState, levelState) => {
  // for each ability not in manual scale mode, calculate the modifier to pass as prop
  const keyValuePairs = Object.entries(abilitiesState).map(([ability, abilityState]) => {
    const value = abilityState.scale === 'Manual' ? abilityState.value : tables.getAbilityMod(abilityState.scale, levelState);
    return [ability, {...abilityState, value}];
  });
  // convert back into object
  return Object.fromEntries(keyValuePairs);
};

export const mapStateToMonsterProp = (state) => ({
  ...state,
  traits: getAllTraits(state.traits),
  abilities: mapAbilitiesToProp(state.abilities, state.level),
  perception: mapPerceptionToProp(state.perception, state.level),
});

export default () => {
  const [state, dispatch] = useReducer(reducer, reducer());
  const props = mapStateToMonsterProp(state);
  return <MonsterBuilder monster={props} onChange={event => dispatch(changeInput(...getOnChangeArgs(event)))} />;
};
