import {describe} from 'riteway';
import {reducer, changeInput} from './MonsterBuilder-reducer';

describe('MonsterBuilder reducer', async assert => {
  const initialState = {
    concept: '',
    level: 0,
    alignment: 'N',
    size: 'Medium',
    type: 'humanoid',
    traits: [],
    'aeon': false,
    'acid': false,
    'air': false,
    'angel': false,
    'archon': false,
    'azata': false,
    'cold': false,
    'daemon': false,
    'demon': false,
    'devil': false,
    'earth': false,
    'electricity': false,
    'fire': false,
    'inevitable': false,
    'protean': false,
    'psychopomp': false,
    'rakshasa': false,
    'spirit': false,
    'swarm': false,
    'water': false,
    'amphibious': false,
    'aquatic': false,
    'incorporeal': false,
    'mindless': false,
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
    const state = {level: 0, alignment: 'N', size: 'Medium'};
    const noAction = undefined;
    assert({
      given: 'a state and no action',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, noAction)),
      expected: JSON.stringify(state)
    });
  }

  {
    const state = {level: 0, alignment: 'N', size: 'Medium'};
    const action = {type: 'weirdType'};
    assert({
      given: 'a state and an invalid action',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, action)),
      expected: JSON.stringify(state)
    });
  }

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

  {
    const newType = 'Fey';
    assert({
      given: 'initial state and an input change on type',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('type', newType))),
      expected: JSON.stringify({...initialState, type: newType})
    });
  }

  {
    const newType = 'Dragon';
    assert({
      given: 'initial state and an input change on type',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('type', newType))),
      expected: JSON.stringify({...initialState, type: newType})
    });
  }

});
