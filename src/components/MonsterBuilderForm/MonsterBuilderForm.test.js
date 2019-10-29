import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import MonsterBuilderForm from './MonsterBuilderForm';

describe('MonsterBuilderForm component', async assert => {
  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render the form',
      actual: $('.MonsterBuilderForm').length,
      expected: 1
    });
  }

  // Sections
  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render the Concept section',
      actual: $('section.Concept').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render the General section',
      actual: $('section.General').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render the Defense section',
      actual: $('section.Defense').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render the Offense section',
      actual: $('section.Offense').length,
      expected: 1
    });
  }

  // Concept section
  {
    const monster = {concept: 'fire'};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should: 'render the concept prop',
      actual: $('section.Concept input[name=concept]').val(),
      expected: monster.concept
    });
  }

  {
    const monster = {conceptNotes: 'lots of fire based innate spells'};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should: 'render the conceptNotes prop',
      actual: $('section.Concept textarea[name=conceptNotes]').val(),
      expected: monster.conceptNotes
    });
  }

  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render the concept title as h2',
      actual: $('section.Concept h2').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm level={3}/>);
    assert({
      given: 'a heading level',
      should: 'render the concept title as the correct heading',
      actual: $('section.Concept h2').length,
      expected: 0
    });
  }

  {
    const $ = render(<MonsterBuilderForm level={3}/>);
    assert({
      given: 'a heading level',
      should: 'render the concept title as the correct heading',
      actual: $('section.Concept h3').length,
      expected: 1
    });
  }

  // General section
  {
    const monster = {level: 5};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should: 'render the level prop',
      actual: $('section.General input[name=level]').val(),
      expected: `${monster.level}`
    });
  }

  {
    const monster = {alignment: 'NG'};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should: 'render the alignment prop',
      actual: $('section.General select[name=alignment]').val(),
      expected: `${monster.alignment}`
    });
  }

  {
    const monster = {size: 'Large'};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should: 'render the size prop',
      actual: $('section.General select[name=size]').val(),
      expected: `${monster.size}`
    });
  }

});
