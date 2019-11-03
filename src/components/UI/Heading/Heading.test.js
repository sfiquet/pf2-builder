import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import Heading from './Heading';

describe('Heading component', async assert => {
  {
    const $ = render(<Heading />);
    assert({
      given: 'no arguments',
      should: 'render a heading at default level (h2)',
      actual: $('h2').length,
      expected: 1
    }); 
  }

  {
    const level = 1;
    const $ = render(<Heading level={level}/>);
    assert({
      given: 'a valid level',
      should: 'render a heading element of the correct level',
      actual: $('h1').length,
      expected: 1
    }); 
  }

  {
    const level = 6;
    const $ = render(<Heading level={level}/>);
    assert({
      given: 'a valid level',
      should: 'render a heading element of the correct level',
      actual: $('h6').length,
      expected: 1
    }); 
  }

  {
    const level = -1;
    const $ = render(<Heading level={level}/>);
    assert({
      given: 'a negative level',
      should: 'render a heading at default level (h2)',
      actual: $('h2').length,
      expected: 1
    }); 
  }

  {
    const level = 0;
    const $ = render(<Heading level={level}/>);
    assert({
      given: '0',
      should: 'render a heading at default level (h2)',
      actual: $('h2').length,
      expected: 1
    }); 
  }

  {
    const level = 7;
    const $ = render(<Heading level={level}/>);
    assert({
      given: 'a level over 6',
      should: 'render an h6 element',
      actual: $('h6').length,
      expected: 1
    }); 
  }

  {
    const level = 3;
    const text = 'Title';
    const $ = render(<Heading level={level}>{text}</Heading>);
    assert({
      given: 'a valid level and a title',
      should: 'render the title in a heading element of the right level',
      actual: $('h3').text(),
      expected: text
    }); 
  }

  {
    const level = 3;
    const text = 'Title';
    const className = 'MyFirstClass MySecondClass';
    const $ = render(<Heading level={level} className={className}>{text}</Heading>);
    assert({
      given: 'a valid level, a title and a className string',
      should: 'apply the className string to the heading element',
      actual: $('h3').hasClass('MyFirstClass'),
      expected: true
    }); 
  }

  {
    const level = 3;
    const text = 'Title';
    const className = 'MyFirstClass MySecondClass';
    const $ = render(<Heading level={level} className={className}>{text}</Heading>);
    assert({
      given: 'a valid level, a title and a className string',
      should: 'apply the className string to the heading element',
      actual: $('h3').hasClass('MySecondClass'),
      expected: true
    }); 
  }
});
