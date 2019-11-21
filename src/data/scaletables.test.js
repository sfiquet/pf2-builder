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

