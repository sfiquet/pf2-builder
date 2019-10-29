import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import MonsterBuilder from './MonsterBuilder-component';
import {reducer} from './MonsterBuilder-reducer';

describe('MonsterBuilder component', async assert => {

  {
    const $ = render(<MonsterBuilder />);
    assert({
      given: 'no arguments',
      should: 'render null',
      actual: $('.MonsterBuilderForm').length,
      expected: 0
    }); 
  }

  {
    const $ = render(<MonsterBuilder />);
    assert({
      given: 'no arguments',
      should: 'render null',
      actual: $('.MonsterProfile').length,
      expected: 0
    }); 
  }

  {
    const monster = reducer();
    const $ = render(<MonsterBuilder monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a valid initial monster',
      should: 'render a heading element',
      actual: $('h2').text(),
      expected: 'Monster Builder'
    }); 
  }

  {
    const monster = reducer();
    const $ = render(<MonsterBuilder monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a valid initial monster',
      should: 'render a MonsterBuilderForm element',
      actual: $('.MonsterBuilderForm').length,
      expected: 1
    }); 
  }

  {
    const monster = reducer();
    const $ = render(<MonsterBuilder monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a valid initial monster',
      should: 'render a MonsterProfile element',
      actual: $('.MonsterProfile').length,
      expected: 1
    }); 
  }

});
