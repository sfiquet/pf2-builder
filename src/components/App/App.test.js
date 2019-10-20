import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import App from './App';

describe('App component', async assert => {
  {
    const $ = render(<App />);
    assert({
      given: 'no arguments',
      should: 'render a header element',
      actual: $('header').length,
      expected: 1
    }); 
  }

  {
    const $ = render(<App />);
    assert({
      given: 'no arguments',
      should: 'render a main element',
      actual: $('main').length,
      expected: 1
    }); 
  }

  {
    const $ = render(<App />);
    assert({
      given: 'no arguments',
      should: 'render a footer element',
      actual: $('footer').length,
      expected: 1
    }); 
  }

});
