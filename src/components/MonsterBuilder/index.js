import React, {useReducer} from 'react';
import getOnChangeArgs from '../../lib/onchange';
import MonsterBuilder from './MonsterBuilder-component';
import {reducer, changeInput} from './MonsterBuilder-reducer';

export default () => {
  const [monster, dispatch] = useReducer(reducer, reducer());
  return <MonsterBuilder monster={monster} onChange={event => dispatch(changeInput(...getOnChangeArgs(event)))} />;
};