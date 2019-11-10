import React, {useReducer} from 'react';
import getOnChangeArgs from '../../lib/onchange';
import MonsterBuilder from './MonsterBuilder-component';
import {changeInput} from './actions';
import reducer from './MonsterBuilder-reducer';
import {getAllTraits} from './Traits-selectors';

const mapStateToMonsterProp = (state) => ({
  ...state,
  traits: getAllTraits(state.traits),
});

export default () => {
  const [state, dispatch] = useReducer(reducer, reducer());
  const props = mapStateToMonsterProp(state);
  return <MonsterBuilder monster={props} onChange={event => dispatch(changeInput(...getOnChangeArgs(event)))} />;
};
