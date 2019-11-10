import {describe} from 'riteway';
import {changeInput} from './actions';
import reducer from './MonsterBuilder-reducer';

describe('MonsterBuilder reducer', async assert => {
  const initialState = {
    concept: '',
    level: 0,
    alignment: 'N',
    size: 'Medium',
    traits: [],
    abilities: {Str: 0, Dex: 0, Con: 0, Int: 0, Wis: 0, Cha: 0},
    perception: 0,
  };

  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return the valid initial state',
      actual: JSON.stringify(reducer(noargs)),
      expected: JSON.stringify(initialState)
    });
  }

  {
    const state = {concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid']};
    const noAction = undefined;
    assert({
      given: 'a state and no action',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, noAction)),
      expected: JSON.stringify(state)
    });
  }

  {
    const state = {concept: '', level: 0, alignment: 'N', size: 'Medium', traits: []};
    const action = {type: 'weirdType'};
    assert({
      given: 'a state and an invalid action',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, action)),
      expected: JSON.stringify(state)
    });
  }

  // concept
  {
    const newConcept = 'fire';
    assert({
      given: 'initial state and an input change on concept',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('concept', newConcept))),
      expected: JSON.stringify({...initialState, concept: newConcept})
    });
  }

  {
    const newConcept = 'singing';
    assert({
      given: 'initial state and an input change on concept',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('concept', newConcept))),
      expected: JSON.stringify({...initialState, concept: newConcept})
    });
  }

  // level
  {
    const newLevel = 5;
    assert({
      given: 'initial state and an input change on level',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('level', newLevel))),
      expected: JSON.stringify({...initialState, level: newLevel})
    });
  }

  {
    const newLevel = -1;
    assert({
      given: 'initial state and an input change on level',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('level', newLevel))),
      expected: JSON.stringify({...initialState, level: newLevel})
    });
  }

  // alignment
  {
    const newAlignment = 'CE';
    assert({
      given: 'initial state and an input change on alignment',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('alignment', newAlignment))),
      expected: JSON.stringify({...initialState, alignment: newAlignment})
    });
  }

  {
    const newAlignment = 'LG';
    assert({
      given: 'initial state and an input change on alignment',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('alignment', newAlignment))),
      expected: JSON.stringify({...initialState, alignment: newAlignment})
    });
  }

  // size
  {
    const newSize = 'Small';
    assert({
      given: 'initial state and an input change on size',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('size', newSize))),
      expected: JSON.stringify({...initialState, size: newSize})
    });
  }

  {
    const newSize = 'Large';
    assert({
      given: 'initial state and an input change on size',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('size', newSize))),
      expected: JSON.stringify({...initialState, size: newSize})
    });
  }

  // traits
  {
    const newTrait = 'fey';
    assert({
      given: 'initial state and an add trait action',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput(newTrait, true))),
      expected: JSON.stringify({...initialState, traits: [newTrait]})
    });
  }

  {
    const state = {concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const newTrait = 'dragon';
    assert({
      given: 'a valid state and an add trait action',
      should: 'add the new trait to the traits array property',
      actual: JSON.stringify(reducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify({...state, traits: [...state.traits, newTrait]})
    });
  }

  {
    const state = {concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const newTrait = 'humanoid';
    assert({
      given: 'a valid state and an add trait action for a trait already present in the traits property',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify(state)
    });
  }

  {
    const trait = 'humanoid';
    assert({
      given: 'initial (empty) state and a deselect trait action',
      should: 'return the given initial state',
      actual: JSON.stringify(reducer(undefined, changeInput(trait, false))),
      expected: JSON.stringify(initialState)
    });
  }

  {
    const state = {concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const trait = 'humanoid';
    assert({
      given: 'a valid state and a deselect trait action for a trait already present in the traits property',
      should: 'remove the trait from the traits property',
      actual: JSON.stringify(reducer(state, changeInput(trait, false))),
      expected: JSON.stringify({...state, traits: ['amphibious']})
    });
  }

  {
    const state = {concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const trait = 'fey';
    assert({
      given: 'a valid state and a deselect trait action for a trait absent from the traits property',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, changeInput(trait, false))),
      expected: JSON.stringify(state)
    });
  }

});
