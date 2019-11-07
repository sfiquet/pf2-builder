import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import Checkbox from './Checkbox';

describe('Checkbox component', async assert => {
  const handleChange = () => {};
  const createCheckbox = (props = {}) => {
    const defaultProps = {
      label: 'default label', 
      checked: false, 
      id: 'defaultid', 
      name: 'default'
    };
    const actualProps = {...defaultProps, ...props};
    return render(<Checkbox label={actualProps.label} checked={actualProps.checked} id={actualProps.id} name={actualProps.name} onChange={handleChange} />);
  };

  // no render
  {
    const $ = render(<Checkbox />);
    assert({
      given: 'no arguments',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const label = 'My label';
    const $ = render(<Checkbox label={label} />);
    assert({
      given: 'a label on its own',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const name = 'flag';
    const $ = render(<Checkbox name={name} />);
    assert({
      given: 'a name on its own',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const id = 'flag1';
    const $ = render(<Checkbox id={id} />);
    assert({
      given: 'an html id on its own',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const checked = false;
    const $ = render(<Checkbox checked={checked} />);
    assert({
      given: 'a checked prop on its own',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const $ = render(<Checkbox onChange={handleChange} />);
    assert({
      given: 'an onChange prop on its own',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const label = 'My label';
    const checked = false;
    const $ = render(<Checkbox label={label} checked={checked} />);
    assert({
      given: 'checked and label',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }

  {
    const label = 'My label';
    const $ = render(<Checkbox label={label} onChange={handleChange} />);
    assert({
      given: 'label and onChange',
      should: 'return null',
      actual: $('.Checkbox').length,
      expected: 0
    });
  }


  // component renders when name and onChange are provided
  {
    const name = 'flag';
    const $ = render(<Checkbox name={name} onChange={handleChange} />);
    assert({
      given: 'name and onChange',
      should: 'render the component',
      actual: $('.Checkbox').length,
      expected: 1
    });
  }

  // name
  {
    const name = 'isSelected';
    const $ = createCheckbox({name});
    assert({
      given: 'all necessary props',
      should: 'set the name attribute on the checkbox',
      actual: $('.Checkbox input[type="checkbox"]').attr('name'),
      expected: name
    });
  }

  // label
  {
    const name = 'myname';
    const $ = createCheckbox({name, label: undefined});
    assert({
      given: 'all necessary props but no label',
      should: 'render the label using name as text',
      actual: $('.Checkbox label').text(),
      expected: name
    });
  }

  {
    const $ = createCheckbox({label:'My label'});
    assert({
      given: 'all necessary props and a label',
      should: 'render the label',
      actual: $('.Checkbox label').length,
      expected: 1
    });
  }

  {
    const label = 'My label';
    const $ = createCheckbox({label});
    assert({
      given: 'all necessary props and a label',
      should: 'render the label',
      actual: $('.Checkbox label').text(),
      expected: label
    });
  }

  // checked
  {
    const $ = createCheckbox({checked: undefined});
    assert({
      given: 'all necessary props and checked not defined',
      should: 'render the checkbox as unchecked',
      actual: $('.Checkbox input[type="checkbox"]').prop('checked'),
      expected: false
    });
  }

  {
    const checked = true;
    const $ = createCheckbox({checked});
    assert({
      given: 'all necessary props and checked = true',
      should: 'render the checkbox in the correct checked state',
      actual: $('.Checkbox input[type="checkbox"]').prop('checked'),
      expected: checked
    });
  }

  {
    const checked = false;
    const $ = createCheckbox({checked});
    assert({
      given: 'all necessary props and checked = false',
      should: 'render the checkbox in the correct checked state',
      actual: $('.Checkbox input[type="checkbox"]').prop('checked'),
      expected: checked
    });
  }

  // id
  {
    const name = 'myname';
    const $ = createCheckbox({name, id: undefined});
    assert({
      given: 'all necessary props and no id',
      should: 'render the checkbox with the name as id',
      actual: $('.Checkbox input[type="checkbox"]').prop('id'),
      expected: name
    });
  }

  {
    const name = 'myname';
    const $ = createCheckbox({name, id: undefined});
    assert({
      given: 'all necessary props and no id',
      should: 'use the name as id to connect the label to the checkbox',
      actual: $('.Checkbox label').prop('for'),
      expected: name
    });
  }

  {
    const id = 'checkbox1';
    const $ = createCheckbox({id});
    assert({
      given: 'all necessary props and an id',
      should: 'render the checkbox with the given id',
      actual: $('.Checkbox input[type="checkbox"]').prop('id'),
      expected: id
    });
  }

  {
    const id = 'checkbox1';
    const $ = createCheckbox({id});
    assert({
      given: 'all necessary props and an id',
      should: 'use the correct id to connect the label to the checkbox',
      actual: $('.Checkbox label').prop('for'),
      expected: id
    });
  }
});
