import {describe} from 'riteway';
import tables from './scaletables';

describe('getAbilityMod', async assert => {
  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return undefined',
      actual: tables.getAbilityMod(noargs),
      expected: undefined
    });
  }

  {
    const scale = 'Low';
    assert({
      given: 'valid scale only',
      should: 'return undefined',
      actual: tables.getAbilityMod(scale),
      expected: undefined
    });
  }
  
  {
    const level = 10;
    assert({
      given: 'valid level only',
      should: 'return undefined',
      actual: tables.getAbilityMod(undefined, level),
      expected: undefined
    });
  }

  {
    const data = {scale: 'Random', level: 12}
    assert({
      given: 'invalid scale',
      should: 'return undefined',
      actual: tables.getAbilityMod(data.scale, data.level),
      expected: undefined
    });
  }
  
  {
    const data = {scale: 'High', level: -2}
    assert({
      given: 'invalid level',
      should: 'return undefined',
      actual: tables.getAbilityMod(data.scale, data.level),
      expected: undefined
    });
  }
  
  {
    const data = {scale: 'High', level: 25}
    assert({
      given: 'invalid level',
      should: 'return undefined',
      actual: tables.getAbilityMod(data.scale, data.level),
      expected: undefined
    });
  }
  
  {
    const data = {scale: 'High', level: 12, abilityMod: 7}
    assert({
      given: 'valid arguments',
      should: 'return the correct ability modifier',
      actual: tables.getAbilityMod(data.scale, data.level),
      expected: data.abilityMod
    });
  }
  
  {
    const data = {scale: 'Extreme', level: -1, abilityMod: 3}
    assert({
      given: 'a combination of scale and level that don\'t yield a valid ability modifier',
      should: 'return the same value as High since the case only exists for Extreme',
      actual: tables.getAbilityMod(data.scale, data.level),
      expected: data.abilityMod
    });
  }
  
  {
    const data = {scale: 'Extreme', level: 0, abilityMod: 3}
    assert({
      given: 'a combination of scale and level that don\'t yield a valid ability modifier',
      should: 'return the same value as High since the case only exists for Extreme',
      actual: tables.getAbilityMod(data.scale, data.level),
      expected: data.abilityMod
    });
  }
  
});

describe('getPerception', async assert => {
  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return undefined',
      actual: tables.getPerception(noargs),
      expected: undefined
    });
  }

  {
    const scale = 'Low';
    assert({
      given: 'valid scale only',
      should: 'return undefined',
      actual: tables.getPerception(scale),
      expected: undefined
    });
  }
  
  {
    const level = 10;
    assert({
      given: 'valid level only',
      should: 'return undefined',
      actual: tables.getPerception(undefined, level),
      expected: undefined
    });
  }

  {
    const data = {scale: 'Random', level: 12}
    assert({
      given: 'invalid scale',
      should: 'return undefined',
      actual: tables.getPerception(data.scale, data.level),
      expected: undefined
    });
  }
  
  {
    const data = {scale: 'High', level: -2}
    assert({
      given: 'invalid level',
      should: 'return undefined',
      actual: tables.getPerception(data.scale, data.level),
      expected: undefined
    });
  }
  
  {
    const data = {scale: 'High', level: 25}
    assert({
      given: 'invalid level',
      should: 'return undefined',
      actual: tables.getPerception(data.scale, data.level),
      expected: undefined
    });
  }
  
  {
    const data = {scale: 'Extreme', level: -1, perception: 9}
    assert({
      given: 'valid arguments',
      should: 'return the correct ability modifier',
      actual: tables.getPerception(data.scale, data.level),
      expected: data.perception
    });
  }

  {
    const data = {scale: 'Terrible', level: -1, perception: 0}
    assert({
      given: 'valid arguments',
      should: 'return the correct ability modifier',
      actual: tables.getPerception(data.scale, data.level),
      expected: data.perception
    });
  }

  {
    const data = {scale: 'Extreme', level: 24, perception: 46}
    assert({
      given: 'valid arguments',
      should: 'return the correct ability modifier',
      actual: tables.getPerception(data.scale, data.level),
      expected: data.perception
    });
  }

  {
    const data = {scale: 'Terrible', level: 24, perception: 32}
    assert({
      given: 'valid arguments',
      should: 'return the correct ability modifier',
      actual: tables.getPerception(data.scale, data.level),
      expected: data.perception
    });
  }

  {
    const data = {scale: 'Moderate', level: 13, perception: 23}
    assert({
      given: 'valid arguments',
      should: 'return the correct ability modifier',
      actual: tables.getPerception(data.scale, data.level),
      expected: data.perception
    });
  }

});

