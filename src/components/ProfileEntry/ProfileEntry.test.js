import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import ProfileEntry from './ProfileEntry';

describe('ProfileEntry component', async assert => {
  {
    const $ = render(<ProfileEntry />);
    assert({
      given: 'no arguments',
      should: 'return null',
      actual: $('.ProfileEntry').html(),
      expected: null
    });
  }

  {
    const content = { title: 'Title', text: 'some text'};
    const level = 3;
    const $ = render(<ProfileEntry content={content} level={level} />);
    assert({
      given: 'a content object',
      should: 'render the title',
      actual: $('.ProfileEntry-title').text(),
      expected: content.title
    });
  }

  {
    const content = { title: 'Title', text: 'some text'};
    const level = 3;
    const $ = render(<ProfileEntry content={content} level={level} />);
    assert({
      given: 'a content object',
      should: 'render the text',
      actual: $('.ProfileEntry-text').text(),
      expected: `${content.text}`
    });
  }

  {
    const content = { title: 'Title', text: 'some text'};
    const level = 3;
    const $ = render(<ProfileEntry content={content} level={level} className="MyClass" />);
    assert({
      given: 'content and a list of class names as a className string',
      should: 'apply the classes to the top element',
      actual: $('.ProfileEntry').hasClass('MyClass'),
      expected: true
    });
  }
});