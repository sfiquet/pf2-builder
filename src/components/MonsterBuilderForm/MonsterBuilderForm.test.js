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

  // ability modifiers
  const abilities = {
    Str: {scale: 'Moderate', value: 5}, 
    Dex: {scale: 'Moderate', value: 5}, 
    Con: {scale: 'Moderate', value: 5}, 
    Int: {scale: 'Moderate', value: 5}, 
    Wis: {scale: 'Moderate', value: 5}, 
    Cha: {scale: 'Moderate', value: 5},
  };

  {
    const should = 'render an ability modifiers sub-section';
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should,
      actual: $('section.General section.abilityMods').length,
      expected: 1
    });
  }

  {
    const should = 'render the Str value prop';
    const monster = {abilities: {...abilities, Str: {scale: 'Manual', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General input[name=Str]').val(),
      expected: `${monster.abilities.Str.value}`
    });
  }
  
  {
    const should = 'render the Dex value prop';
    const monster = {abilities: {...abilities, Dex: {scale: 'High', value: 3}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General input[name=Dex]').val(),
      expected: `${monster.abilities.Dex.value}`
    });
  }

  {
    const should = 'render the Con value prop';
    const monster = {abilities: {...abilities, Con: {scale: 'Moderate', value: 2}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General input[name=Con]').val(),
      expected: `${monster.abilities.Con.value}`
    });
  }

  {
    const should = 'render the Int value prop';
    const monster = {abilities: {...abilities, Int: {scale: 'Moderate', value: 1}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General input[name=Int]').val(),
      expected: `${monster.abilities.Int.value}`
    });
  }

  {
    const should = 'render the Wis value prop';
    const monster = {abilities: {...abilities, Wis: {scale: 'Moderate', value: 0}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General input[name=Wis]').val(),
      expected: `${monster.abilities.Wis.value}`
    });
  }

  {
    const should = 'render the Cha value prop';
    const monster = {abilities: {...abilities, Cha: {scale: 'Moderate', value: -1}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General input[name=Cha]').val(),
      expected: `${monster.abilities.Cha.value}`
    });
  }
  
  {
    const should = 'render the Str scale prop';
    const monster = {abilities: {...abilities, Str: {scale: 'Manual', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General select[name=Str_scale]').val(),
      expected: `${monster.abilities.Str.scale}`
    });
  }
  
  {
    const should = 'render the Dex scale prop';
    const monster = {abilities: {...abilities, Dex: {scale: 'Moderate', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General select[name=Dex_scale]').val(),
      expected: `${monster.abilities.Dex.scale}`
    });
  }
  
  {
    const should = 'render the Con scale prop';
    const monster = {abilities: {...abilities, Con: {scale: 'High', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General select[name=Con_scale]').val(),
      expected: `${monster.abilities.Con.scale}`
    });
  }
  
  {
    const should = 'render the Int scale prop';
    const monster = {abilities: {...abilities, Int: {scale: 'Low', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General select[name=Int_scale]').val(),
      expected: `${monster.abilities.Int.scale}`
    });
  }
  
  {
    const should = 'render the Wis scale prop';
    const monster = {abilities: {...abilities, Wis: {scale: 'Extreme', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General select[name=Wis_scale]').val(),
      expected: `${monster.abilities.Wis.scale}`
    });
  }
  
  {
    const should = 'render the Cha scale prop';
    const monster = {abilities: {...abilities, Cha: {scale: 'Manual', value: 4}}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster',
      should,
      actual: $('section.General select[name=Cha_scale]').val(),
      expected: `${monster.abilities.Cha.scale}`
    });
  }
  
  // perception and senses
  {
    const should = 'render an perception sub-section';
    const $ = render(<MonsterBuilderForm />);
    assert({
      given: 'no arguments',
      should,
      actual: $('section.General section.perception').length,
      expected: 1
    });
  }

  {
    const should = 'render the perception value prop';
    const monster = {perception: {scale: 'Manual', value: 4}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster with perception',
      should,
      actual: $('section.General input[name=Perception]').val(),
      expected: `${monster.perception.value}`
    });
  }
  
  {
    const should = 'render the perception scale prop';
    const monster = {perception: {scale: 'Manual', value: 4}};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster with perception',
      should,
      actual: $('section.General select[name=Perception_scale]').val(),
      expected: `${monster.perception.scale}`
    });
  }

  {
    const should = 'render the senses prop';
    const monster = {senses: 'darkvision'};
    const $ = render(<MonsterBuilderForm monster={monster} onChange={()=>{}} />);
    assert({
      given: 'a monster with senses',
      should,
      actual: $('section.General textarea[name=senses]').val(),
      expected: `${monster.senses}`
    });
  }

});
