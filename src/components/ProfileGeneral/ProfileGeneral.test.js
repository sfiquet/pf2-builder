import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import ProfileGeneral from './ProfileGeneral';

describe('ProfileGeneral component', async assert => {
  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render the component (with default values)',
      actual: $('.ProfileGeneral').length,
      expected: 1
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render the component (with default values)',
      actual: $('.ProfileGeneral').length,
      expected: 1
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a hidden heading for screenreaders',
      actual: $('.ProfileGeneral-heading').length,
      expected: 1
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a hidden heading for screenreaders',
      actual: $('.ProfileGeneral-heading').hasClass('sr-only'),
      expected: true
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a hidden heading for screenreaders',
      actual: $('.ProfileGeneral-heading').text(),
      expected: 'General Stats'
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a hidden traits heading for screenreaders',
      actual: $('.ProfileGeneral-traitsheading').text(),
      expected: 'Traits'
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a hidden traits heading for screenreaders',
      actual: $('.ProfileGeneral-traitsheading').hasClass('sr-only'),
      expected: true
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a perception entry',
      actual: $('.ProfileGeneral-perception').length,
      expected: 1
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render a skills entry',
      actual: $('.ProfileGeneral-skills').length,
      expected: 1
    });
  }

  {
    const $ = render(<ProfileGeneral />);
    assert({
      given: 'no arguments',
      should: 'render an ability modifiers entry',
      actual: $('.ProfileGeneral-abilities').length,
      expected: 1
    });
  }

  {
    const level = 3;
    const $ = render(<ProfileGeneral level={level}/>);
    assert({
      given: 'a heading level',
      should: 'render one heading at that level',
      actual: $('h3').length,
      expected: 1
    });
  }

  {
    const level = 3;
    const mandatoryHeadings = ['Traits', 'Perception', 'Skills', 'Ability Modifiers'];
    const $ = render(<ProfileGeneral level={level}/>);
    assert({
      given: 'a heading level',
      should: 'render other headings at the next level',
      actual: $('h4').length,
      expected: mandatoryHeadings.length
    });
  }

  {
    const monster = { alignment: 'CG', size: 'Medium', traits: ['angel', 'celestial', 'cold'] };
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster with alignment, size and traits',
      should: 'render a list of tags containing alignment, size and traits',
      actual: $('.ProfileGeneral-traits').text(),
      expected: [monster.alignment, monster.size, ...monster.traits].join('')
    });
  }

  {
    const monster = { traits: ['fiend', 'cold', 'demon'] };
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster with traits',
      should: 'render a list of tags containing traits in alphabetical order',
      actual: $('.ProfileGeneral-traits').text(),
      expected: ['cold', 'demon', 'fiend'].join('')
    });
  }

  {
    const monster = { perception: 3 };
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster with perception',
      should: 'render a perception entry with title and formatted value',
      actual: $('.ProfileGeneral-perception').text(),
      expected: ['Perception', `+${monster.perception}`].join('')
    });
  }

  {
    const monster = { perception: 3, senses: 'darkvision' };
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster with perception and special senses',
      should: 'render a perception entry with title and formatted value, followed by the senses',
      actual: $('.ProfileGeneral-perception').text(),
      expected: ['Perception', `+${monster.perception}`, `; ${monster.senses}`].join('')
    });
  }

  {
    const should = 'not render a languages entry';
    const monster = {languages: ''};
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster without languages',
      should,
      actual: $('.ProfileGeneral-languages').length,
      expected: 0
    });
  }

  {
    const should = 'render a languages entry';
    const monster = {languages: 'Common, Draconic; telepathy 100 feet'};
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster with languages',
      should,
      actual: $('.ProfileGeneral-languages').text(),
      expected: ['Languages', `${monster.languages}`].join('')
    });
  }

  {
    const monster = { abilities: {Str: 0, Dex: 1, Con: 2, Int: -1, Wis: -2, Cha: -3} };
    const $ = render(<ProfileGeneral monster={monster} />);
    assert({
      given: 'a monster with ability modifiers',
      should: 'render an ability modifiers entry with titles and formatted values',
      actual: $('.ProfileGeneral-abilities').text(),
      expected: ['Ability Modifiers', 'Str', '0', 'Dex', '+1', 'Con', '+2', 'Int', '-1', 'Wis', '-2', 'Cha', '-3'].join('')
    });
  }
});
