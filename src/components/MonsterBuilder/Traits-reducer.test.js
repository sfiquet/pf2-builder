import {describe} from 'riteway';
import {changeInput} from './actions';
import traitsReducer from './Traits-reducer';

describe('Traits reducer', async assert => {
  const initialState = [];

  // no arguments
  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return the valid initial state',
      actual: JSON.stringify(traitsReducer(noargs)),
      expected: JSON.stringify(initialState)
    });
  }

  // no action
  {
    const state = ['humanoid'];
    const noAction = undefined;
    assert({
      given: 'a state and no action',
      should: 'return the given state',
      actual: JSON.stringify(traitsReducer(state, noAction)),
      expected: JSON.stringify(state)
    });
  }

  // unrelated action
  {
    const state = [];
    const action = {type: 'notATraitsType'};
    assert({
      given: 'a state and an unrelated action',
      should: 'return the given state',
      actual: JSON.stringify(traitsReducer(state, action)),
      expected: JSON.stringify(state)
    });
  }

  // changeInput: select a trait
  {
    const newTrait = 'fey';
    assert({
      given: 'initial state and an add trait action',
      should: 'add the new trait to the state',
      actual: JSON.stringify(traitsReducer(undefined, changeInput(newTrait, true))),
      expected: JSON.stringify([newTrait])
    });
  }

  {
    const newTrait = 'dragon';
    assert({
      given: 'initial state and an add trait action',
      should: 'add the new trait to the state',
      actual: JSON.stringify(traitsReducer(undefined, changeInput(newTrait, true))),
      expected: JSON.stringify([newTrait])
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const newTrait = 'dragon';
    assert({
      given: 'a valid state and an add trait action',
      should: 'add the new trait to the traits array',
      actual: JSON.stringify(traitsReducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify([...state, newTrait])
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const newTrait = 'humanoid';
    assert({
      given: 'a valid state and an add trait action for a trait already present in the state',
      should: 'return the given state',
      actual: JSON.stringify(traitsReducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify(state)
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const newTrait = 'amphibious';
    assert({
      given: 'a valid state and an add trait action for a trait already present in the state',
      should: 'return the given state',
      actual: JSON.stringify(traitsReducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify(state)
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const newTrait = 'angel';
    assert({
      given: 'a valid state and an add trait action for a child trait whose parent that is not in the state',
      should: 'add the trait to the state',
      actual: JSON.stringify(traitsReducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify([...state, newTrait])
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const newTrait = 'giant';
    assert({
      given: 'a valid state and an add trait action for a child of a trait already present in the state',
      should: 'remove the parent and add the child',
      actual: JSON.stringify(traitsReducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify(['amphibious', 'giant'])
    });
  }

  {
    const state = ['monitor', 'amphibious'];
    const newTrait = 'inevitable';
    assert({
      given: 'a valid state and an add trait action for a descendant of a trait already present in the state',
      should: 'remove the ancestor and add the descendant',
      actual: JSON.stringify(traitsReducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify(['amphibious', 'inevitable'])
    });
  }

  // changeInput: deselect a trait
  {
    const state = [];
    const trait = 'fey';
    assert({
      given: 'an empty state and a deselect trait action',
      should: 'return the given state',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: state
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const trait = 'fey';
    assert({
      given: 'a non-empty state and a deselect trait action for a trait not present in the state',
      should: 'return the given state',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: state
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const trait = 'humanoid';
    assert({
      given: 'a non-empty state and a deselect trait action for a trait present in the state',
      should: 'remove the trait from the state',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['amphibious']
    });
  }

  {
    const state = ['humanoid', 'amphibious'];
    const trait = 'amphibious';
    assert({
      given: 'a non-empty state and a deselect trait action for a trait present in the state',
      should: 'remove the trait from the state',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['humanoid']
    });
  }

  {
    const state = ['angel', 'amphibious'];
    const trait = 'angel';
    assert({
      given: 'a non-empty state and a deselect trait action for a child trait present in the state',
      should: 'remove the trait from the state and add its parent',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['amphibious', 'celestial']
    });
  }

  {
    const state = ['inevitable', 'amphibious'];
    const trait = 'inevitable';
    assert({
      given: 'a non-empty state and a deselect trait action for a child trait present in the state',
      should: 'remove the trait from the state and add its parent',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['amphibious', 'aeon']
    });
  }

  {
    const state = ['inevitable', 'amphibious'];
    const trait = 'aeon';
    assert({
      given: 'a non-empty state and a deselect trait action for the parent of a trait present in the state',
      should: 'remove the child trait from the state and add the parent of the given trait',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['amphibious', 'monitor']
    });
  }

  {
    const state = ['angel', 'amphibious'];
    const trait = 'celestial';
    assert({
      given: 'a non-empty state and a deselect trait action for the first ancestor and direct parent of a trait present in the state',
      should: 'remove the trait from the state',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['amphibious']
    });
  }

  {
    const state = ['inevitable', 'amphibious'];
    const trait = 'monitor';
    assert({
      given: 'a non-empty state and a deselect trait action for the first ancestor of a trait present in the state',
      should: 'remove the trait from the state',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['amphibious']
    });
  }

  {
    const state = ['inevitable', 'protean'];
    const trait = 'aeon';
    assert({
      given: 'a non-empty state containing a sibling of the given trait and a deselect trait action for the parent of a trait present in the state',
      should: 'remove the child trait from the state but not add the parent of the given trait',
      actual: traitsReducer(state, changeInput(trait, false)),
      expected: ['protean']
    });
  }

});