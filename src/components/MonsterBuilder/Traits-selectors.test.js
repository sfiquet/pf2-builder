import {describe} from 'riteway';
import {getAllAncestors, getAllDescendants, getAllTraits} from './Traits-selectors';

describe('getAllAncestors', async assert => {
  assert({
    given: 'id of trait with no parent',
    should: 'return an empty array',
    actual: getAllAncestors('fey'),
    expected: []
  });

  assert({
    given: 'id of trait with no parent',
    should: 'return an empty array',
    actual: getAllAncestors('celestial'),
    expected: []
  });

  assert({
    given: 'id of trait with a top-level parent',
    should: 'return an array containing the id of the parent',
    actual: getAllAncestors('angel'),
    expected: ['celestial']
  });

  assert({
    given: 'id of trait with a top-level parent',
    should: 'return an array containing the id of the parent',
    actual: getAllAncestors('aeon'),
    expected: ['monitor']
  });

  assert({
    given: 'id of trait with a second-level parent',
    should: 'return an array containing the ids of the two ancestors',
    actual: getAllAncestors('inevitable'),
    expected: ['aeon', 'monitor']
  });
});

describe('getAllDescendants', async assert => {
  assert({
    given: 'id of trait with no children',
    should: 'return an empty array',
    actual: getAllDescendants('fey'),
    expected: []
  });

  assert({
    given: 'id of trait with no children',
    should: 'return an empty array',
    actual: getAllDescendants('dragon'),
    expected: []
  });

  assert({
    given: 'id of trait with leaf children',
    should: 'return an array of children ids',
    actual: getAllDescendants('celestial'),
    expected: ['angel', 'archon', 'azata']
  });

  assert({
    given: 'id of trait with leaf children',
    should: 'return an array of children ids',
    actual: getAllDescendants('aeon'),
    expected: ['inevitable']
  });

  assert({
    given: 'id of trait with children who have children',
    should: 'return an array of all descendant ids',
    actual: getAllDescendants('monitor'),
    expected: ['aeon', 'inevitable', 'protean', 'psychopomp']
  });
});

describe('getAllTraits', async assert => {
  
  assert({
    given: 'no argument',
    should: 'return an empty array',
    actual: getAllTraits(),
    expected: []
  });

  assert({
    given: 'an empty array',
    should: 'return an empty array',
    actual: getAllTraits([]),
    expected: []
  });
  
  assert({
    given: 'array of top-level traits',
    should: 'return a copy of the array',
    actual: getAllTraits(['fey', 'celestial', 'monitor']),
    expected: ['fey', 'celestial', 'monitor']
  });

  assert({
    given: 'array of leaf traits',
    should: 'return an array containing the leaf traits and all their ancestors',
    actual: getAllTraits(['angel']),
    expected: ['angel', 'celestial']
  });

  assert({
    given: 'array of leaf traits',
    should: 'return an array containing the leaf traits and all their ancestors',
    actual: getAllTraits(['inevitable']),
    expected: ['inevitable', 'aeon', 'monitor']
  });

  assert({
    given: 'array of leaf traits containing siblings',
    should: 'return an array containing the leaf traits and all their ancestors without duplication',
    actual: getAllTraits(['angel', 'azata']),
    expected: ['angel', 'azata', 'celestial']
  });

  assert({
    given: 'array of leaf traits with common ancestors',
    should: 'return an array containing the leaf traits and all their ancestors without duplication',
    actual: getAllTraits(['inevitable', 'protean']),
    expected: ['inevitable', 'protean', 'aeon', 'monitor']
  });

});