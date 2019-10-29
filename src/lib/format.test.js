import {describe} from 'riteway';
import format from './format';

describe('format', async assert => {
  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return undefined',
      actual: format(noargs),
      expected: undefined
    });
  }

  {
    const value = 0;
    assert({
      given: '0',
      should: 'return a string containing 0 without leading plus/minus',
      actual: format(value),
      expected: '0'
    });
  }

  {
    const value = -1;
    assert({
      given: 'a negative integer',
      should: 'return a string containing the number with a leading minus sign',
      actual: format(value),
      expected: '-1'
    });
  }

  {
    const value = 3;
    assert({
      given: 'a positive integer',
      should: 'return a string containing the number with a leading plus sign',
      actual: format(value),
      expected: '+3'
    });
  }
});