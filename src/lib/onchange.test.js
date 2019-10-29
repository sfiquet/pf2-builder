import {describe} from 'riteway';
import getOnChangeArgs from './onchange';

describe('convertevent', async assert => {
  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return undefined',
      actual: getOnChangeArgs(noargs),
      expected: undefined
    });
  }

  {
    const event = { target: {type: 'input', name: 'level', value: '5'} };
    assert({
      given: 'an onChange event for an input',
      should: 'return name and value',
      actual: getOnChangeArgs(event),
      expected: [event.target.name, event.target.value]
    });
  }

  {
    const event = { target: {type: 'select', name: 'size', value: 'Large'}};
    assert({
      given: 'an onChange event for a select',
      should: 'return name and value',
      actual: getOnChangeArgs(event),
      expected: [event.target.name, event.target.value]
    });
  }

  {
    const event = { target: {type: 'textarea', name: 'notes', value: 'blah blah blah'}};
    assert({
      given: 'an onChange event for a textarea',
      should: 'return name and value',
      actual: getOnChangeArgs(event),
      expected: [event.target.name, event.target.value]
    });
  }

  {
    const event = { target: {type: 'checkbox', name: 'fire', checked: true} };
    assert({
      given: 'an onChange event for a checkbox',
      should: 'return name and checked status',
      actual: getOnChangeArgs(event),
      expected: [event.target.name, event.target.checked]
    });
  }

  {
    const event = { target: {type: 'checkbox', name: 'fire', checked: false} };
    assert({
      given: 'an onChange event for a checkbox',
      should: 'return name and checked status',
      actual: getOnChangeArgs(event),
      expected: [event.target.name, event.target.checked]
    });
  }
});
