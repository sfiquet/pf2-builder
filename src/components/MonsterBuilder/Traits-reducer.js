import data from '../../data/data';
import {getAllAncestors, getAllDescendants} from './Traits-selectors';

const addTrait = (traitsState, name) => {
  if (traitsState.includes(name)) {
    return traitsState;
  }
  
  const ancestors = getAllAncestors(name);
  if (ancestors.length === 0){
    return [...traitsState, name];
  }

  return [...traitsState.filter(item => !ancestors.includes(item)), name];
};

const removeTrait = (traitsState, name) => {
  const itemsToRemove = [name, ...getAllDescendants(name)];
  const traitObj = data.traits.byId[name];
  let newState;

  // remove item and any descendants from state
  newState = traitsState.filter(item => !itemsToRemove.includes(item));

  // add parent to state if none of its descendants are in the remaining state
  if (traitObj.parent){
    const descendants = getAllDescendants(traitObj.parent);
    if (newState.find(item => descendants.includes(item)) === undefined){
      return [...newState, traitObj.parent];
    }
  }

  return newState;
};

const changeTrait = (traitsState, name, isSelected) => {
  if (isSelected){
    return addTrait(traitsState, name);

  } else {
    return removeTrait(traitsState, name);
  }
};

const traitsReducer = (traitsState = [], action = {}) => {
  if (!data.traits.allIds.includes(action.name)){
    return traitsState;
  }

  switch (action.type){

    case 'CHANGE_INPUT':
      return changeTrait(traitsState, action.name, action.value);

    default:
      return traitsState;
  }
};

export default traitsReducer;