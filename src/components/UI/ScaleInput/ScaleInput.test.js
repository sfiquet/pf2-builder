import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import ScaleInput from './ScaleInput';

describe('ScaleInput', async assert => {
  const onChange = () => {};
  const createScaleInput = ({
    title = 'title',
    value = 0,
    scales = ['Low', 'Moderate', 'High'],
    scaleValue = 'Moderate',
  } = {}) => render(<ScaleInput title={title} scales={scales} scaleValue={scaleValue} value={value} onChange={onChange} />);

  // no render
  {
    const $ = render(<ScaleInput />);
    assert({
      given: 'no arguments',
      should: 'return null',
      actual: $('.ScaleInput').length,
      expected: 0
    });
  }
  {
    const $ = render(<ScaleInput title="title" />);
    assert({
      given: 'the title prop on its own',
      should: 'return null',
      actual: $('.ScaleInput').length,
      expected: 0
    });
  }
  {
    const $ = render(<ScaleInput scales={['one', 'two']} />);
    assert({
      given: 'the scales prop on its own',
      should: 'return null',
      actual: $('.ScaleInput').length,
      expected: 0
    });
  }
  {
    const $ = render(<ScaleInput value={0} />);
    assert({
      given: 'a value prop on its own',
      should: 'return null',
      actual: $('.ScaleInput').length,
      expected: 0
    });
  }

  // render
  {
    const $ = render(<ScaleInput title="title" value={0} scales={['one', 'two']} />);
    assert({
      given: 'all necessary props',
      should: 'render the component',
      actual: $('.ScaleInput').length,
      expected: 1
    });
  }

  {
    const title = 'Str';
    const $ = createScaleInput({title});
    assert({
      given: 'all necessary props',
      should: 'render the title',
      actual: $('.ScaleInput legend').text(),
      expected: title
    });
  }

  {
    const scales = ['High', 'Moderate', 'Low'];
    const $ = createScaleInput({scales});
    assert({
      given: 'all necessary props',
      should: 'render the list of scale values with an additional manual option',
      actual: $('.ScaleInput select').children().length,
      expected: scales.length + 1
    });
  }
  
  {
    const scales = ['High', 'Moderate', 'Low'];
    const scaleValue = 'Low';
    const $ = createScaleInput({scales, scaleValue});
    assert({
      given: 'all necessary props',
      should: 'renders the correct item in the list of scale values',
      actual: $('.ScaleInput select').val(),
      expected: scaleValue
    });
  }

  {
    const scales = ['High', 'Moderate', 'Low'];
    const scaleValue = 'Manual';
    const $ = createScaleInput({scales, scaleValue});
    assert({
      given: 'all necessary props',
      should: 'renders the correct item in the list of scale values',
      actual: $('.ScaleInput select').val(),
      expected: scaleValue
    });
  }

  {
    const scales = ['High', 'Moderate', 'Low'];
    const scaleValue = 'Manual';
    const $ = createScaleInput({scales, scaleValue});
    assert({
      given: 'all necessary props and the Manual option selected',
      should: 'renders the input control as read-write',
      actual: $('.ScaleInput input').prop('readonly'),
      expected: false
    });
  }

  {
    const scales = ['High', 'Moderate', 'Low'];
    const scaleValue = 'High';
    const $ = createScaleInput({scales, scaleValue});
    assert({
      given: 'all necessary props and a scale option selected',
      should: 'renders the input control as read-only',
      actual: $('.ScaleInput input').prop('readonly'),
      expected: true
    });
  }

  {
    const scales = ['High', 'Moderate', 'Low'];
    const scaleValue = 'Moderate';
    const $ = createScaleInput({scales, scaleValue});
    assert({
      given: 'all necessary props and a scale option selected',
      should: 'renders the input control as read-only',
      actual: $('.ScaleInput input').prop('readonly'),
      expected: true
    });
  }

  {
    const value = 5;
    const $ = createScaleInput({value});
    assert({
      given: 'all necessary props',
      should: 'renders the value in the input control',
      actual: $('.ScaleInput input').val(),
      expected: `${value}`
    });
  }

});