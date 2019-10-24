import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import MonsterProfile from './MonsterProfile';

describe('MonsterProfile component', async assert => {
  {
    const $ = render(<MonsterProfile />);
    assert({
      given: 'no arguments',
      should: 'return null',
      actual: $('.MonsterProfile').length,
      expected: 0
    });
  }

  {
    const $ = render(<MonsterProfile />);
    assert({
      given: 'no arguments',
      should: 'return null',
      actual: $('.MonsterProfile').html(),
      expected: null
    });
  }

  {
    const $ = render(<MonsterProfile  monster={{}} />);
    assert({
      given: 'an empty object as monster prop',
      should: 'render a MonsterProfile component',
      actual: $('.MonsterProfile').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterProfile monster={{}} />);
    assert({
      given: 'an empty object as monster prop',
      should: 'render a profile header',
      actual: $('.ProfileHeader').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterProfile monster={{}} />);
    assert({
      given: 'an empty object as monster prop',
      should: 'render a general section',
      actual: $('section.ProfileGeneral').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterProfile monster={{}} />);
    assert({
      given: 'an empty object as monster prop',
      should: 'render a defense section',
      actual: $('section.ProfileDefense').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterProfile monster={{}} />);
    assert({
      given: 'an empty object as monster prop',
      should: 'render a offense section',
      actual: $('section.ProfileOffense').length,
      expected: 1
    });
  }
});
