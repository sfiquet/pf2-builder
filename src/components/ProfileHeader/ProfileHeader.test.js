import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import ProfileHeader from './ProfileHeader';

describe('ProfileHeader component', async assert => {
  {
    const $ = render(<ProfileHeader />);
    assert({
      given: 'no arguments',
      should: 'render the component (with default values)',
      actual: $('.ProfileHeader').length,
      expected: 1
    });
  }

  {
    const $ = render(<ProfileHeader />);
    assert({
      given: 'no arguments',
      should: 'render the default monster name',
      actual: $('.ProfileHeader-name').text(),
      expected: 'Monster'
    });
  }
  
  {
    const $ = render(<ProfileHeader />);
    assert({
      given: 'no arguments',
      should: 'render the default monster level',
      actual: $('.ProfileHeader-level').text(),
      expected: 'Level'
    });
  }
  
  {
    const name = 'Oliphant';
    const $ = render(<ProfileHeader name={name}/>);
    assert({
      given: 'a name prop',
      should: 'render the given name',
      actual: $('.ProfileHeader-name').text(),
      expected: name
    });
  }
  
  {
    const level = 10;
    const $ = render(<ProfileHeader level={level}/>);
    assert({
      given: 'a level prop',
      should: 'render the given level',
      actual: $('.ProfileHeader-level').text(),
      expected: `Creature ${level}`
    });
  }

  {
    const level = 0;
    const $ = render(<ProfileHeader level={level}/>);
    assert({
      given: 'level 0',
      should: 'render the given level, not the default',
      actual: $('.ProfileHeader-level').text(),
      expected: `Creature ${level}`
    });
  }
});
