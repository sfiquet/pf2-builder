import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import MonsterBuilderForm from './MonsterBuilderForm';
import {getTraitIdsByType} from '../../data/data.js';

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

  // traits
  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render a traits sub-section',
      actual: $('section.General section.traits').length,
      expected: 1
    });
  }

  // type traits
  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render a type traits element',
      actual: $('section.General .typeTraits').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm onChange={()=>{}}/>);
    assert({
      given: 'an onChange prop',
      should: 'render a checkbox for each type trait',
      actual: $('section.General .typeTraits input[type="checkbox"]').length,
      expected: getTraitIdsByType('monsterType').length
    });
  }

  {
    const monster = {traits: ['dragon']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single type trait',
      should: 'render a checked checkbox for the selected trait',
      actual: $('section.General .typeTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: 1
    });
  }

  {
    const monster = {traits: ['dragon']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single item',
      should: 'render a checked checkbox for the selected trait',
      actual: $('section.General .typeTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).attr('name'),
      expected: 'dragon'
    });
  }

  {
    const monster = {traits: ['dragon', 'cold', 'amphibious']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single type trait and other traits',
      should: 'ignore the traits that are not type traits',
      actual: $('section.General .typeTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: 1
    });
  }

  {
    const monster = {traits: ['angel', 'celestial', 'humanoid']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing several type traits',
      should: 'select all associated checkboxes',
      actual: $('section.General .typeTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: monster.traits.length
    });
  }

  {
    const monster = {traits: ['angel', 'celestial', 'humanoid']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing several type traits',
      should: 'select all associated checkboxes',
      actual: $('section.General .typeTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).map(function(i, el){
        return $(this).attr('name');
      }).get().sort(),
      expected: monster.traits
    });
  }

  // power source traits
  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render a power traits element',
      actual: $('section.General .powerTraits').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm onChange={()=>{}}/>);
    assert({
      given: 'an onChange prop',
      should: 'render a checkbox for each power trait',
      actual: $('section.General .powerTraits input[type="checkbox"]').length,
      expected: getTraitIdsByType('powerSource').length
    });
  }


  {
    const monster = {traits: ['fire']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single power source trait',
      should: 'render a checked checkbox for the selected trait',
      actual: $('section.General .powerTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: 1
    });
  }

  {
    const monster = {traits: ['fire']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single power source trait',
      should: 'render a checked checkbox for the selected trait',
      actual: $('section.General .powerTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).attr('name'),
      expected: 'fire'
    });
  }

  {
    const monster = {traits: ['dragon', 'cold', 'amphibious']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single power source trait and other traits',
      should: 'ignore the traits that are not power traits',
      actual: $('section.General .powerTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: 1
    });
  }

  {
    const monster = {traits: ['cold', 'fire', 'water']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing several power source traits',
      should: 'select all associated checkboxes',
      actual: $('section.General .powerTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: monster.traits.length
    });
  }

  {
    const monster = {traits: ['cold', 'fire', 'water']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing several power source traits',
      should: 'select all associated checkboxes',
      actual: $('section.General .powerTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).map(function(i, el){
        return $(this).attr('name');
      }).get().sort(),
      expected: monster.traits
    });
  }

  // physical traits
  {
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should: 'render a physical traits element',
      actual: $('section.General .physicalTraits').length,
      expected: 1
    });
  }

  {
    const $ = render(<MonsterBuilderForm onChange={()=>{}}/>);
    assert({
      given: 'an onChange prop',
      should: 'render a checkbox for each physical trait',
      actual: $('section.General .physicalTraits input[type="checkbox"]').length,
      expected: getTraitIdsByType('physical').length
    });
  }




  {
    const monster = {traits: ['swarm']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single physical trait',
      should: 'render a checked checkbox for the selected trait',
      actual: $('section.General .physicalTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: 1
    });
  }

  {
    const monster = {traits: ['swarm']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single physical trait',
      should: 'render a checked checkbox for the selected trait',
      actual: $('section.General .physicalTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).attr('name'),
      expected: 'swarm'
    });
  }

  {
    const monster = {traits: ['dragon', 'cold', 'amphibious']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing a single physical trait and other traits',
      should: 'ignore the traits that are not physical traits',
      actual: $('section.General .physicalTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: 1
    });
  }

  {
    const monster = {traits: ['incorporeal', 'mindless', 'spirit']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing several physical traits',
      should: 'select all associated checkboxes',
      actual: $('section.General .physicalTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).length,
      expected: monster.traits.length
    });
  }

  {
    const monster = {traits: ['incorporeal', 'mindless', 'spirit']};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}}/>);
    assert({
      given: 'a monster with a traits prop containing several physical traits',
      should: 'select all associated checkboxes',
      actual: $('section.General .physicalTraits input[type="checkbox"]').filter(function(i, el){
        return $(this).prop('checked');
      }).map(function(i, el){
        return $(this).attr('name');
      }).get().sort(),
      expected: monster.traits
    });
  }

});
