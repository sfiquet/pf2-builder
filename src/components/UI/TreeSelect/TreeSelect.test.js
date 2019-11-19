import {describe} from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import TreeSelect from './TreeSelect';

describe('TreeSelect component', async assert => {
  const createNode = ({
    id = undefined,
    name = undefined,
    isSelected = false,
    children = undefined,
    parent = undefined,
  }) => ({
    id, name, isSelected, children, parent
  });

  const onChange = () => {};

  // no render
  {
    const $ = render(<TreeSelect />);
    assert({
      given: 'no arguments',
      should: 'return null',
      actual: $('.TreeSelect').length,
      expected: 0
    });
  }

  {
    const treeNodes = [];
    const $ = render(<TreeSelect treeNodes={treeNodes} />);
    assert({
      given: 'an empty treeNodes prop',
      should: 'return null',
      actual: $('.TreeSelect').length,
      expected: 0
    });
  }

  {
    const title = 'My title';
    const $ = render(<TreeSelect title={title} />);
    assert({
      given: 'a title only',
      should: 'return null',
      actual: $('.TreeSelect').length,
      expected: 0
    });
  }

  {
    const title = 'My title';
    const prefix = 'context';
    const $ = render(<TreeSelect title={title} idPrefix={prefix} />);
    assert({
      given: 'a title and a prefix but no treeNodes',
      should: 'return null',
      actual: $('.TreeSelect').length,
      expected: 0
    });
  }

  // render
  {
    const treeNodes = [
      createNode({id: 'one'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a treeNodes prop',
      should: 'render the component',
      actual: $('.TreeSelect').length,
      expected: 1
    });
  }

  {
    const treeNodes = [
      createNode({id: 'one'}),
    ];
    const title = 'My title';
    const $ = render(<TreeSelect treeNodes={treeNodes} title={title} onChange={onChange} />);
    assert({
      given: 'a treeNodes and a title',
      should: 'render the title',
      actual: $('.TreeSelect legend').text(),
      expected: title
    });
  }

  {
    const treeNodes = [
      createNode({id: 'one'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a one-element treeNodes',
      should: 'render a checkbox',
      actual: $('.TreeSelect .Checkbox').length,
      expected: 1
    });
  }

  {
    const treeNodes = [
      createNode({id: 'one'}),
      createNode({id: 'two'}),
      createNode({id: 'three'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a multi-element treeNodes',
      should: 'render the correct number of checkbox components',
      actual: $('.TreeSelect .Checkbox').length,
      expected: 3
    });
  }

  {
    const treeNodes = [
      createNode({id: 'one', children: ['A', 'B']}),
      createNode({id: 'A', parent: 'one'}),
      createNode({id: 'B', parent: 'one'}),
      createNode({id: 'two'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a hierarchical treeNodes',
      should: 'render the correct number of checkbox components',
      actual: $('.TreeSelect .Checkbox').length,
      expected: 4
    });
  }

  {
    const treeNodes = [
      createNode({id: 'celestial', children: ['angel', 'archon']}),
      createNode({id: 'angel', parent: 'celestial'}),
      createNode({id: 'archon', parent: 'celestial'}),
      createNode({id: 'two'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a hierarchical treeNodes',
      should: 'render the checkbox label as the id of the item if it has no parent',
      actual: $('.TreeSelect .Checkbox').eq(0).text(),
      expected: treeNodes[0].id
    });
  }

  {
    const treeNodes = [
      createNode({id: 'celestial', children: ['angel', 'archon']}),
      createNode({id: 'angel', parent: 'celestial'}),
      createNode({id: 'archon', parent: 'celestial'}),
      createNode({id: 'two'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a hierarchical treeNodes',
      should: 'render the checkbox label as the id of the item if it has no parent',
      actual: $('.TreeSelect .Checkbox').eq(3).text(),
      expected: treeNodes[3].id
    });
  }

  {
    const treeNodes = [
      createNode({id: 'celestial', children: ['angel', 'archon']}),
      createNode({id: 'angel', parent: 'celestial'}),
      createNode({id: 'archon', parent: 'celestial'}),
      createNode({id: 'two'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a hierarchical treeNodes',
      should: 'render the checkbox label as a combination of the parent id and the child id',
      actual: $('.TreeSelect .Checkbox').eq(1).text(),
      expected: `${treeNodes[0].id}, ${treeNodes[1].id}`
    });
  }

  {
    const treeNodes = [
      createNode({id: 'celestial', children: ['angel', 'archon']}),
      createNode({id: 'angel', parent: 'celestial'}),
      createNode({id: 'archon', parent: 'celestial'}),
      createNode({id: 'two'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a hierarchical treeNodes',
      should: 'render the checkbox label as a combination of the parent id and the child id',
      actual: $('.TreeSelect .Checkbox').eq(2).text(),
      expected: `${treeNodes[0].id}, ${treeNodes[2].id}`
    });
  }

  {
    const treeNodes = [
      createNode({id: 'monitor', children: ['aeon', 'protean']}),
      createNode({id: 'aeon', children: ['inevitable'], parent: 'monitor'}),
      createNode({id: 'inevitable', parent: 'aeon'}),
      createNode({id: 'protean', parent: 'monitor'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a hierarchical treeNodes',
      should: 'render the checkbox label as a combination of the ids of all ancestors and the child\'s id',
      actual: $('.TreeSelect .Checkbox').eq(2).text(),
      expected: `${treeNodes[0].id}, ${treeNodes[1].id}, ${treeNodes[2].id}`
    });
  }

  {
    const treeNodes = [
      createNode({id: 'celestial', children: ['angel', 'archon']}),
      createNode({id: 'angel', parent: 'unknown'}),
      createNode({id: 'archon', parent: 'celestial'}),
      createNode({id: 'two'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a treeNodes with a broken parent id in a two level hierarchy',
      should: 'render the checkbox label as a combination of the parent id and the child id',
      actual: $('.TreeSelect .Checkbox').eq(1).text(),
      expected: `${treeNodes[1].parent}, ${treeNodes[1].id}`
    });
  }

  {
    const treeNodes = [
      createNode({id: 'monitor', children: ['aeon', 'protean']}),
      createNode({id: 'aeon', children: ['inevitable'], parent: 'unknown'}),
      createNode({id: 'inevitable', parent: 'aeon'}),
      createNode({id: 'protean', parent: 'monitor'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a treeNodes with a broken parent id in a complex hierarchy',
      should: 'render the checkbox label as a combination of the ids of all ancestors up to the broken one and the child\'s id',
      actual: $('.TreeSelect .Checkbox').eq(2).text(),
      expected: `${treeNodes[1].parent}, ${treeNodes[1].id}, ${treeNodes[2].id}`
    });
  }

  {
    const treeNodes = [
      createNode({id: 'monitor', children: ['aeon', 'protean']}),
      createNode({id: 'aeon', children: ['inevitable'], parent: 'monitor'}),
      createNode({id: 'inevitable', parent: 'broken'}),
      createNode({id: 'protean', parent: 'monitor'}),
    ];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a treeNodes with a broken parent id in a complex hierarchy',
      should: 'render the checkbox label as a combination of the ids of all ancestors up to the broken one and the child\'s id',
      actual: $('.TreeSelect .Checkbox').eq(2).text(),
      expected: `${treeNodes[2].parent}, ${treeNodes[2].id}`
    });
  }

  // idPrefix
  {
    const node = createNode({id: 'one'});
    const treeNodes = [node];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'no idPrefix and a TreeNodes containing an item with an id but no name',
      should: 'render a checkbox using the node id as its html id',
      actual: $('.TreeSelect .Checkbox input[type="checkbox"]').eq(0).prop('id'),
      expected: node.id
    });
  }

  {
    const idPrefix = 'prefix';
    const node = createNode({id: 'one'});
    const treeNodes = [node];
    const $ = render(<TreeSelect treeNodes={treeNodes} idPrefix={idPrefix} onChange={onChange} />);
    assert({
      given: 'an idPrefix and a TreeNodes containing an item with an id but no name',
      should: 'render a checkbox whose id is based on idPrefix and the node id',
      actual: $('.TreeSelect .Checkbox input[type="checkbox"]').eq(0).prop('id'),
      expected: `${idPrefix}_${node.id}`
    });
  }

  {
    const node = createNode({name: 'one'});
    const treeNodes = [node];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'no idPrefix and a TreeNodes containing an item with a name but no id',
      should: 'render a checkbox using the node name as its html id',
      actual: $('.TreeSelect .Checkbox input[type="checkbox"]').eq(0).prop('id'),
      expected: node.name
    });
  }

  {
    const idPrefix = 'prefix';
    const node = createNode({name: 'one'});
    const treeNodes = [node];
    const $ = render(<TreeSelect treeNodes={treeNodes} idPrefix={idPrefix} onChange={onChange} />);
    assert({
      given: 'an idPrefix and a TreeNodes containing an item with a name but no id',
      should: 'render a checkbox whose id is based on idPrefix and the node name',
      actual: $('.TreeSelect .Checkbox input[type="checkbox"]').eq(0).prop('id'),
      expected: `${idPrefix}_${node.name}`
    });
  }

  {
    const node = createNode({id: 'one', name: 'the first one'});
    const treeNodes = [node];
    const $ = render(<TreeSelect treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'no idPrefix and a TreeNodes containing an item with an id and a name',
      should: 'render a checkbox using the node id as its html id',
      actual: $('.TreeSelect .Checkbox input[type="checkbox"]').eq(0).prop('id'),
      expected: node.id
    });
  }

  {
    const idPrefix = 'prefix';
    const node = createNode({id: 'one', name: 'the first one'});
    const treeNodes = [node];
    const $ = render(<TreeSelect treeNodes={treeNodes} idPrefix={idPrefix} onChange={onChange} />);
    assert({
      given: 'an idPrefix and a TreeNodes containing an item with an id and a name',
      should: 'render a checkbox whose id is based on idPrefix and the node id',
      actual: $('.TreeSelect .Checkbox input[type="checkbox"]').eq(0).prop('id'),
      expected: `${idPrefix}_${node.id}`
    });
  }

  {
    const treeNodes = [
      createNode({id: 'one'}),
    ];
    const className = 'MyFirstClass MySecondClass';
    const $ = render(<TreeSelect className={className} treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a treeNodes prop and a className string',
      should: 'render the component with the given classes',
      actual: $('.TreeSelect').hasClass('MyFirstClass'),
      expected: true
    });
  }

  {
    const treeNodes = [
      createNode({id: 'one'}),
    ];
    const className = 'MyFirstClass MySecondClass';
    const $ = render(<TreeSelect className={className} treeNodes={treeNodes} onChange={onChange} />);
    assert({
      given: 'a treeNodes prop and a className string',
      should: 'render the component with the given classes',
      actual: $('.TreeSelect').hasClass('MySecondClass'),
      expected: true
    });
  }
});
