import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const TreeSelect = ({treeNodes, title, idPrefix, className, onChange}) => {
  if (!treeNodes || treeNodes.length === 0){
    return null;
  }

  const getItemLabel = node => node.name ? node.name : node.id;

  const buildAncestorList = (node) => {
    
    if (!node.parent){
      return [];
    }
    
    const parentNode = treeNodes.find(el => el.id === node.parent);
    if (!parentNode){
      console.error(`TreeSelect: Inconsistent hierarchy - Missing parent node "${node.parent}"`);
      return [node.parent];
    }

    return [getItemLabel(parentNode), ...buildAncestorList(parentNode)];
  };

  const newTree = treeNodes.map(node => ({...node, ancestors: buildAncestorList(node)}));
  const options = newTree.map(item => {
    const itemId = item.id ? item.id : item.name;
    const itemLabel = getItemLabel(item);
    const ancestorLabel = item.ancestors.reduceRight((label, ancestor) => `${label}${ancestor}, `, '');
    const label = `${ancestorLabel}${itemLabel}`;
    const htmlId = idPrefix ? `${idPrefix}_${itemId}` : itemId;
    
    const checkbox = <Checkbox key={itemId} name={itemLabel} label={label} checked={item.isSelected} id={htmlId} onChange={onChange} />;
    
    if (item.ancestors.length === 0){
      return checkbox;
    }

    const indentClass = item.ancestors.length === 1 ? 'TreeSelect-indent1' : 'TreeSelect-indent2';
    return <div key={itemId} className={indentClass}>{checkbox}</div>;
  });

  return (
    <fieldset className={["TreeSelect form-group", className].join(' ')}>
      <legend className="MonsterBuilder-legend">{title}</legend>
      {options}
    </fieldset>
  );
};

export default TreeSelect;
